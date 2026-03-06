"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCategorySlug, type CategoryName, type PortfolioAsset } from "@/config/content-catalog";

type AssetGridProps = {
  assets: PortfolioAsset[];
  ariaLabel: string;
  metaMode?: "category" | "dimensions";
  linkMode?: "none" | "category-asset";
  previewMode?: "none" | "modal";
  showCardMeta?: boolean;
  stripParentheticalTitleText?: boolean;
};

const ratioClassMap: Record<PortfolioAsset["ratioClass"], string> = {
  square: "aspect-square",
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]"
};

function renderAssetTitle(asset: PortfolioAsset, stripParentheticalTitleText: boolean): ReactNode {
  if (asset.category !== "VIDEOS") {
    return asset.title;
  }

  const titleMatch = asset.title.match(/^(.*?)(?:\s*\(([^()]*)\))\s*$/);
  if (!titleMatch) {
    return asset.title;
  }

  const mainTitle = titleMatch[1]?.trim();
  const subtitle = titleMatch[2]?.trim();
  if (!mainTitle || !subtitle) {
    return asset.title;
  }

  if (stripParentheticalTitleText) {
    return mainTitle;
  }

  return (
    <>
      <span>{mainTitle}</span>
      <span className="block text-[length:var(--size-project-meta)] leading-[var(--lh-project-meta)]">
        {subtitle}
      </span>
    </>
  );
}

export function AssetGrid({
  assets,
  ariaLabel,
  metaMode = "category",
  linkMode = "none",
  previewMode = "none",
  showCardMeta = true,
  stripParentheticalTitleText = false
}: AssetGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const openTimeoutRef = useRef<number | null>(null);
  const activeAsset = activeIndex !== null ? assets[activeIndex] : null;
  const isModalOpen = previewMode === "modal" && activeAsset !== null;

  const openPreview = (index: number, element?: HTMLElement | null) => {
    if (openTimeoutRef.current !== null) {
      window.clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }

    if (!element) {
      setActiveIndex(index);
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    openTimeoutRef.current = window.setTimeout(() => {
      setActiveIndex(index);
      openTimeoutRef.current = null;
    }, 120);
  };

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    if (backdropRef.current) {
      backdropRef.current.scrollTop = 0;
    }
    requestAnimationFrame(() => {
      modalRef.current?.scrollIntoView({ block: "center", inline: "center" });
    });
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => {
          if (index === null) {
            return index;
          }
          return Math.max(index - 1, 0);
        });
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((index) => {
          if (index === null) {
            return index;
          }
          return Math.min(index + 1, assets.length - 1);
        });
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [assets.length, isModalOpen]);

  useEffect(() => {
    return () => {
      if (openTimeoutRef.current !== null) {
        window.clearTimeout(openTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <section
        className="grid w-full max-w-full grid-cols-3 gap-[var(--layout-grid-gap)] pl-[var(--content-offset-desktop)] pr-[var(--space-xs)] max-[1024px]:grid-cols-2 max-[1024px]:px-[var(--space-xs)] max-[700px]:grid-cols-1"
        aria-label={ariaLabel}
      >
        {assets.map((asset, index) => (
          <article
            key={asset.id}
            id={`asset-${asset.id}`}
            className="group [animation:card-reveal_var(--motion-widget-hover)_ease-in-out_both]"
            style={index < 4 ? { animationDelay: `${index * 60}ms` } : undefined}
          >
            {previewMode === "modal" ? (
              <button
                type="button"
                onClick={(event: ReactMouseEvent<HTMLButtonElement>) =>
                  openPreview(index, event.currentTarget.closest("article"))
                }
                aria-label={`Preview ${asset.title}`}
                className={`relative block w-full overflow-hidden bg-[var(--color-surface-tint)] text-left outline outline-1 outline-[var(--color-surface-outline)] transition-colors hover:outline-[var(--color-surface-outline-hover)] focus-visible:outline-[var(--color-nav-hover-yellow)] ${
                  metaMode === "category" ? "aspect-square" : ratioClassMap[asset.ratioClass]
                }`}
              >
                {asset.type === "video" ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={asset.src}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <Image
                    className={`absolute inset-0 h-full w-full ${
                      metaMode === "category" && asset.ratioClass === "wide" ? "object-contain" : "object-cover"
                    }`}
                    src={asset.src}
                    alt={asset.title}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
              </button>
            ) : linkMode === "category-asset" ? (
              <Link
                href={`/${getCategorySlug(asset.category as CategoryName)}#asset-${asset.id}`}
                aria-label={`Open ${asset.title} in ${asset.category}`}
                className={`relative block w-full overflow-hidden bg-[var(--color-surface-tint)] outline outline-1 outline-[var(--color-surface-outline)] transition-colors hover:outline-[var(--color-surface-outline-hover)] group-focus-within:outline-[var(--color-nav-hover-yellow)] ${
                  metaMode === "category" ? "aspect-square" : ratioClassMap[asset.ratioClass]
                }`}
              >
                {asset.type === "video" ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={asset.src}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <Image
                    className={`absolute inset-0 h-full w-full ${
                      metaMode === "category" && asset.ratioClass === "wide" ? "object-contain" : "object-cover"
                    }`}
                    src={asset.src}
                    alt={asset.title}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
              </Link>
            ) : (
              <div
                className={`relative block w-full overflow-hidden bg-[var(--color-surface-tint)] outline outline-1 outline-[var(--color-surface-outline)] transition-colors hover:outline-[var(--color-surface-outline-hover)] group-focus-within:outline-[var(--color-nav-hover-yellow)] ${
                  metaMode === "category" ? "aspect-square" : ratioClassMap[asset.ratioClass]
                }`}
              >
                {asset.type === "video" ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={asset.src}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <Image
                    className={`absolute inset-0 h-full w-full ${
                      metaMode === "category" && asset.ratioClass === "wide" ? "object-contain" : "object-cover"
                    }`}
                    src={asset.src}
                    alt={asset.title}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
              </div>
            )}
            <p className="mt-[var(--space-xs)] font-[var(--font-display)] text-[length:var(--size-project-name)] leading-[var(--lh-project-name)] font-bold uppercase">
              <span className="text-[var(--color-text-on-bg)] hover:text-[var(--color-link-hover-blue)] max-[700px]:inline-flex max-[700px]:min-h-[44px] max-[700px]:items-center">
                {renderAssetTitle(asset, stripParentheticalTitleText)}
              </span>
            </p>
            {showCardMeta ? (
              <p className="mt-[var(--space-xxs)] font-[var(--font-display)] text-[length:var(--size-project-meta)] leading-[var(--lh-project-meta)] uppercase">
                {metaMode === "dimensions" ? `${asset.width} x ${asset.height}` : asset.category}
              </p>
            ) : null}
          </article>
        ))}
      </section>

      {isModalOpen && activeAsset ? (
        <div ref={backdropRef} className="asset-preview-backdrop" onClick={() => setActiveIndex(null)}>
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeAsset.title} preview`}
            className="asset-preview-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="asset-preview-close"
              aria-label="Close preview"
              onClick={() => setActiveIndex(null)}
            >
              Close
            </button>

            <div className="asset-preview-media">
              {activeAsset.type === "video" ? (
                <video
                  className="h-auto w-auto max-h-full max-w-full object-contain"
                  src={activeAsset.src}
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : (
                <Image
                  className="h-auto w-auto max-h-full max-w-full object-contain"
                  src={activeAsset.src}
                  alt={activeAsset.title}
                  width={activeAsset.width}
                  height={activeAsset.height}
                  sizes="90vw"
                  priority
                />
              )}
            </div>

            <div className="asset-preview-footer">
              <p className="m-0 font-[var(--font-display)] text-[length:var(--size-project-name)] leading-[var(--lh-project-name)] uppercase">
                {activeAsset.title}
              </p>
              <p className="m-0 mt-[var(--space-xxs)] font-[var(--font-display)] text-[length:var(--size-project-meta)] leading-[var(--lh-project-meta)] uppercase">
                {metaMode === "dimensions"
                  ? `${activeAsset.width} x ${activeAsset.height}`
                  : activeAsset.category}
              </p>
            </div>

            <div className="asset-preview-nav">
              <button
                type="button"
                onClick={() => setActiveIndex((index) => (index === null ? index : Math.max(index - 1, 0)))}
                disabled={activeIndex === 0}
                aria-label="Previous item"
                className="asset-preview-nav-button"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((index) =>
                    index === null ? index : Math.min(index + 1, assets.length - 1)
                  )
                }
                disabled={activeIndex === assets.length - 1}
                aria-label="Next item"
                className="asset-preview-nav-button"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
