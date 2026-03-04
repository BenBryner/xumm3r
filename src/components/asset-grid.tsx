import Image from "next/image";
import type { PortfolioAsset } from "@/config/content-catalog";

type AssetGridProps = {
  assets: PortfolioAsset[];
  ariaLabel: string;
  metaMode?: "category" | "dimensions";
};

const ratioClassMap: Record<PortfolioAsset["ratioClass"], string> = {
  square: "aspect-square",
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]"
};

export function AssetGrid({ assets, ariaLabel, metaMode = "category" }: AssetGridProps) {
  return (
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
          <p className="mt-[var(--space-xs)] font-[var(--font-display)] text-[length:var(--size-project-name)] leading-[var(--lh-project-name)] font-bold uppercase">
            <span className="text-[var(--color-text-on-bg)] hover:text-[var(--color-link-hover-blue)] max-[700px]:inline-flex max-[700px]:min-h-[44px] max-[700px]:items-center">
              {asset.title}
            </span>
          </p>
          <p className="mt-[var(--space-xxs)] font-[var(--font-display)] text-[length:var(--size-project-meta)] leading-[var(--lh-project-meta)] uppercase">
            {metaMode === "dimensions" ? `${asset.width} x ${asset.height}` : asset.category}
          </p>
        </article>
      ))}
    </section>
  );
}
