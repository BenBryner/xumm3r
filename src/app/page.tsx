import { AssetGrid } from "@/components/asset-grid";
import { PortfolioShell } from "@/components/portfolio-shell";
import { featuredAssets } from "@/config/content-catalog";

export default function HomePage() {
  return (
    <PortfolioShell pageKicker="" pageTitle="" pageSubtitle="">
      <AssetGrid assets={featuredAssets} ariaLabel="Featured work" />
    </PortfolioShell>
  );
}
