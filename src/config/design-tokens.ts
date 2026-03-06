import { contentPalette } from "@/config/content-palette";

export const designTokens = {
  colors: {
    background: "#000000",
    textOnBackground: "#FFFFFF",
    textOnLight: "#0F0E0F",
    textMuted: "#866F70",
    navHoverYellow: "#DFAF05",
    linkHoverBlue: "#38B6EB",
    mobileNavHover: "#D6BCB6",
    accentPink: "#9F5887",
    surfaceTint: "#111111",
    surfaceOutline: "#493342",
    surfaceOutlineHover: "#DFAF05",
    contentAccents: contentPalette.globalAccents,
    contentDominant: contentPalette.globalDominant
  },
  fonts: {
    display: 'custom_121658, "VCR OSD Mono", monospace',
    body: 'custom_127110, Arial, sans-serif',
    meta: 'custom_128272, "VT220", monospace',
    ui: '"Neue Haas Grotesk Text", custom_127110, Arial, sans-serif'
  },
  typography: {
    nav: { size: 11, lineHeight: 14, weight: 400, transform: "uppercase" },
    hero: { size: 16, lineHeight: 16, weight: 500, transform: "uppercase" },
    projectName: { size: 16, lineHeight: 18, weight: 700, transform: "uppercase" },
    projectMeta: { size: 10, lineHeight: 13, weight: 400, transform: "uppercase" },
    body: { size: 12, lineHeight: 17, weight: 400 },
    micro: { size: 8, lineHeight: 10, weight: 400, transform: "uppercase" }
  },
  spacing: {
    xxs: 4,
    xs: 8,
    sm: 10,
    md: 16,
    lg: 24,
    xl: 30,
    xxl: 48
  },
  layout: {
    topBarHeight: 136,
    maxContentWidth: 868,
    leftRailWidth: 396,
    leftRailOffset: 6,
    gridGap: 8,
    navPaddingX: 6,
    heroTopOffset: 64
  },
  motion: {
    pageEnterDurationMs: 500,
    pageEnterEase: "ease-out",
    pageExitEase: "ease-in",
    widgetHoverDurationMs: 700,
    widgetHoverEase: "ease-in-out",
    linkColorDurationMs: 200
  },
  cursor: {
    sizePx: 12,
    opacity: 0.9,
    zIndex: 1000
  },
  contentAnalysis: {
    generatedAt: contentPalette.generatedAt,
    assetsProcessed: contentPalette.assetsProcessed,
    byCategory: contentPalette.byCategory
  }
} as const;

export const cssVariables: Record<`--${string}`, string> = {
  "--color-bg": designTokens.colors.background,
  "--color-text-on-bg": designTokens.colors.textOnBackground,
  "--color-text-on-light": designTokens.colors.textOnLight,
  "--color-text-muted": designTokens.colors.textMuted,
  "--color-nav-hover-yellow": designTokens.colors.navHoverYellow,
  "--color-link-hover-blue": designTokens.colors.linkHoverBlue,
  "--color-mobile-nav-hover": designTokens.colors.mobileNavHover,
  "--color-accent-pink": designTokens.colors.accentPink,
  "--color-surface-tint": designTokens.colors.surfaceTint,
  "--color-surface-outline": designTokens.colors.surfaceOutline,
  "--color-surface-outline-hover": designTokens.colors.surfaceOutlineHover,
  "--font-display": designTokens.fonts.display,
  "--font-body": designTokens.fonts.body,
  "--font-meta": designTokens.fonts.meta,
  "--font-ui": designTokens.fonts.ui,
  "--size-nav": `${designTokens.typography.nav.size}px`,
  "--lh-nav": `${designTokens.typography.nav.lineHeight}px`,
  "--size-hero": `${designTokens.typography.hero.size}px`,
  "--lh-hero": `${designTokens.typography.hero.lineHeight}px`,
  "--size-project-name": `${designTokens.typography.projectName.size}px`,
  "--lh-project-name": `${designTokens.typography.projectName.lineHeight}px`,
  "--size-project-meta": `${designTokens.typography.projectMeta.size}px`,
  "--lh-project-meta": `${designTokens.typography.projectMeta.lineHeight}px`,
  "--size-body": `${designTokens.typography.body.size}px`,
  "--lh-body": `${designTokens.typography.body.lineHeight}px`,
  "--size-micro": `${designTokens.typography.micro.size}px`,
  "--lh-micro": `${designTokens.typography.micro.lineHeight}px`,
  "--space-xxs": `${designTokens.spacing.xxs}px`,
  "--space-xs": `${designTokens.spacing.xs}px`,
  "--space-sm": `${designTokens.spacing.sm}px`,
  "--space-md": `${designTokens.spacing.md}px`,
  "--space-lg": `${designTokens.spacing.lg}px`,
  "--space-xl": `${designTokens.spacing.xl}px`,
  "--space-xxl": `${designTokens.spacing.xxl}px`,
  "--layout-top-bar": `${designTokens.layout.topBarHeight}px`,
  "--layout-content-max": `${designTokens.layout.maxContentWidth}px`,
  "--layout-left-rail": `${designTokens.layout.leftRailWidth}px`,
  "--layout-left-rail-offset": `${designTokens.layout.leftRailOffset}px`,
  "--layout-grid-gap": `${designTokens.layout.gridGap}px`,
  "--layout-nav-padding-x": `${designTokens.layout.navPaddingX}px`,
  "--motion-page-enter": `${designTokens.motion.pageEnterDurationMs}ms`,
  "--motion-widget-hover": `${designTokens.motion.widgetHoverDurationMs}ms`,
  "--motion-link-color": `${designTokens.motion.linkColorDurationMs}ms`,
  "--cursor-size": `${designTokens.cursor.sizePx}px`,
  "--cursor-opacity": `${designTokens.cursor.opacity}`
};
