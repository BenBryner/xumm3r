#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import os
import subprocess
import tempfile
from collections import Counter, defaultdict
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable

from PIL import Image


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tif", ".tiff", ".gif"}
VIDEO_EXTENSIONS = {".mp4", ".mov", ".m4v", ".webm"}


@dataclass(frozen=True)
class MediaColor:
    color: tuple[int, int, int]
    weight: int


def rgb_to_hex(rgb: tuple[int, int, int]) -> str:
    return "#{:02X}{:02X}{:02X}".format(*rgb)


def luminance(rgb: tuple[int, int, int]) -> float:
    r, g, b = rgb
    return (0.2126 * r) + (0.7152 * g) + (0.0722 * b)


def saturation(rgb: tuple[int, int, int]) -> float:
    max_channel = max(rgb)
    min_channel = min(rgb)
    if max_channel == 0:
        return 0.0
    return (max_channel - min_channel) / max_channel


def is_usable_accent(rgb: tuple[int, int, int]) -> bool:
    lum = luminance(rgb)
    sat = saturation(rgb)
    return 24 <= lum <= 238 and sat >= 0.14


def color_distance(a: tuple[int, int, int], b: tuple[int, int, int]) -> float:
    return ((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2) ** 0.5


def distinct_colors(
    ranked_colors: Iterable[tuple[tuple[int, int, int], int]],
    *,
    limit: int,
    min_distance: float = 46.0,
) -> list[str]:
    selected: list[tuple[int, int, int]] = []
    for rgb, _weight in ranked_colors:
        if any(color_distance(rgb, chosen) < min_distance for chosen in selected):
            continue
        selected.append(rgb)
        if len(selected) >= limit:
            break
    return [rgb_to_hex(color) for color in selected]


def dominant_colors(image: Image.Image, color_count: int = 8) -> list[MediaColor]:
    image = image.convert("RGB")
    image.thumbnail((320, 320))
    quantized = image.convert("P", palette=Image.Palette.ADAPTIVE, colors=color_count)
    palette = quantized.getpalette()[: color_count * 3]
    counts = quantized.getcolors() or []
    ranked = sorted(counts, reverse=True)
    colors: list[MediaColor] = []
    for count, palette_index in ranked:
        offset = palette_index * 3
        rgb = tuple(palette[offset : offset + 3])
        if len(rgb) == 3:
            colors.append(MediaColor(color=(rgb[0], rgb[1], rgb[2]), weight=count))
    return colors


def extract_video_frame(path: Path) -> Path:
    fd, temp_path = tempfile.mkstemp(suffix=".png")
    os.close(fd)
    subprocess.run(
        ["ffmpeg", "-y", "-hide_banner", "-loglevel", "error", "-i", str(path), "-frames:v", "1", temp_path],
        check=True,
    )
    return Path(temp_path)


def load_image_for_media(path: Path) -> tuple[Image.Image, Path | None]:
    extension = path.suffix.lower()
    if extension in IMAGE_EXTENSIONS:
        return Image.open(path), None
    if extension in VIDEO_EXTENSIONS:
        frame_path = extract_video_frame(path)
        return Image.open(frame_path), frame_path
    raise ValueError(f"Unsupported media type: {path}")


def build_palette(content_root: Path) -> dict:
    global_counter: Counter[tuple[int, int, int]] = Counter()
    category_counter: defaultdict[str, Counter[tuple[int, int, int]]] = defaultdict(Counter)

    processed = 0
    for path in sorted(content_root.rglob("*")):
        if not path.is_file() or path.name.startswith("."):
            continue
        if path.suffix.lower() not in IMAGE_EXTENSIONS.union(VIDEO_EXTENSIONS):
            continue

        category = path.relative_to(content_root).parts[0] if path.relative_to(content_root).parts else "misc"

        image: Image.Image | None = None
        temporary_path: Path | None = None
        try:
            image, temporary_path = load_image_for_media(path)
            processed += 1
            for rank, media_color in enumerate(dominant_colors(image, color_count=8)[:5]):
                rank_weight = max(1, 6 - rank)
                global_counter[media_color.color] += rank_weight
                category_counter[category][media_color.color] += rank_weight
        except Exception:
            continue
        finally:
            if image is not None:
                image.close()
            if temporary_path is not None and temporary_path.exists():
                temporary_path.unlink(missing_ok=True)

    usable_global = [(rgb, weight) for rgb, weight in global_counter.most_common() if is_usable_accent(rgb)]
    usable_by_category = {
        category: [(rgb, weight) for rgb, weight in counter.most_common() if is_usable_accent(rgb)]
        for category, counter in category_counter.items()
    }

    return {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "assetsProcessed": processed,
        "globalAccents": distinct_colors(usable_global, limit=10),
        "globalDominant": [rgb_to_hex(rgb) for rgb, _weight in global_counter.most_common(12)],
        "byCategory": {
            category: distinct_colors(ranked, limit=8)
            for category, ranked in sorted(usable_by_category.items(), key=lambda item: item[0].lower())
        },
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Extract dominant + accent color palette from a content folder.")
    parser.add_argument("--content", default="Content", help="Path to content root directory.")
    parser.add_argument("--out", default="", help="Optional output JSON file path.")
    args = parser.parse_args()

    content_root = Path(args.content).resolve()
    result = build_palette(content_root)
    payload = json.dumps(result, indent=2)

    if args.out:
        out_path = Path(args.out).resolve()
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(payload + "\n", encoding="utf-8")
        print(out_path)
        return

    print(payload)


if __name__ == "__main__":
    main()
