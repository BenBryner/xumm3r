import { notFound } from "next/navigation";
import { AssetGrid } from "@/components/asset-grid";
import { PortfolioShell } from "@/components/portfolio-shell";
import {
  categoryOrder,
  getAssetsByCategory,
  getCategoryFromSlug,
  getCategorySlug
} from "@/config/content-catalog";

type SectionPageProps = {
  params: Promise<{ section: string }>;
};

function formatCategoryLabel(category: string) {
  return category;
}

export function generateStaticParams() {
  return categoryOrder.map((category) => ({ section: getCategorySlug(category) }));
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params;
  const category = getCategoryFromSlug(section);

  if (!category) {
    notFound();
  }

  const assets = getAssetsByCategory(category);

  return (
    <PortfolioShell
      pageKicker="Section"
      pageTitle={formatCategoryLabel(category)}
      pageSubtitle={`${assets.length} items`}
    >
      <AssetGrid
        assets={assets}
        ariaLabel={`${category} work`}
        metaMode="dimensions"
        previewMode="modal"
        showCardMeta={false}
      />
    </PortfolioShell>
  );
}
