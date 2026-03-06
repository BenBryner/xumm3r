export type PortfolioAsset = {
  id: string;
  title: string;
  category: string;
  type: "image" | "video";
  src: string;
  width: number;
  height: number;
  ratioClass: "wide" | "tall" | "square";
  durationSeconds?: number;
};

export const categoryOrder = [
  "covers",
  "graphics",
  "flyers",
  "VIDEOS",
  "PERSONAL"
] as const;

export type CategoryName = (typeof categoryOrder)[number];

export const categorySlugMap: Record<CategoryName, string> = {
  covers: "covers",
  graphics: "graphics",
  flyers: "flyers",
  VIDEOS: "videos",
  PERSONAL: "personal"
};

export function getCategorySlug(category: CategoryName) {
  return categorySlugMap[category];
}

export function getCategoryFromSlug(slug: string): CategoryName | undefined {
  const entry = (Object.entries(categorySlugMap) as Array<[CategoryName, string]>).find(
    ([, value]) => value === slug
  );
  return entry?.[0];
}

export const allAssets: PortfolioAsset[] = [
  {
    "id": "covers-22-tg-jpg",
    "title": "22 - TG",
    "category": "covers",
    "type": "image",
    "src": "/content/covers/22%20-%20TG.jpg",
    "width": 3000,
    "height": 3000,
    "ratioClass": "square"
  },
  {
    "id": "covers-b4-vic-vic-jpg",
    "title": "B4 Vic - Vic",
    "category": "covers",
    "type": "image",
    "src": "/content/covers/B4%20Vic%20-%20Vic.jpg",
    "width": 1179,
    "height": 1179,
    "ratioClass": "square"
  },
  {
    "id": "covers-beautriful-nightmare-iyagi-jpg",
    "title": "Beautriful nightmare - iyagi",
    "category": "covers",
    "type": "image",
    "src": "/content/covers/_Beautriful%20nightmare_%20-%20iyagi.jpg",
    "width": 1080,
    "height": 1080,
    "ratioClass": "square"
  },
  {
    "id": "covers-final-warning-glokk40spaz-jpg",
    "title": "final warning - glokk40spaz",
    "category": "covers",
    "type": "image",
    "src": "/content/covers/final%20warning%20-%20glokk40spaz.jpg",
    "width": 1416,
    "height": 1416,
    "ratioClass": "square"
  },
  {
    "id": "covers-money-angel-iyagi-jpg",
    "title": "Money Angel - Iyagi",
    "category": "covers",
    "type": "image",
    "src": "/content/covers/Money%20Angel%20-%20Iyagi.jpg",
    "width": 1024,
    "height": 1024,
    "ratioClass": "square"
  },
  {
    "id": "covers-tracklist-wxnter-jpg",
    "title": "tracklist wxnter",
    "category": "covers",
    "type": "image",
    "src": "/content/covers/tracklist%20wxnter.jpg",
    "width": 1425,
    "height": 1425,
    "ratioClass": "square"
  },
  {
    "id": "covers-unused-cover-no-artist-jpg",
    "title": "unused cover (no artist)",
    "category": "covers",
    "type": "image",
    "src": "/content/covers/unused%20cover%20(no%20artist).jpg",
    "width": 3000,
    "height": 3000,
    "ratioClass": "square"
  },
  {
    "id": "covers-unused-iyagi-cover-jpg",
    "title": "unused iyagi cover",
    "category": "covers",
    "type": "image",
    "src": "/content/covers/unused%20iyagi%20cover.jpg",
    "width": 1080,
    "height": 1080,
    "ratioClass": "square"
  },
  {
    "id": "covers-vanguard-prototype-jpg",
    "title": "Vanguard - Prototype",
    "category": "covers",
    "type": "image",
    "src": "/content/covers/Vanguard%20-%20Prototype.jpg",
    "width": 2028,
    "height": 2028,
    "ratioClass": "square"
  },
  {
    "id": "covers-where-we-left-off-wxnter-jpg",
    "title": "Where we left off - Wxnter",
    "category": "covers",
    "type": "image",
    "src": "/content/covers/_Where%20we%20left%20off_%20-%20Wxnter.jpg",
    "width": 1179,
    "height": 1179,
    "ratioClass": "square"
  },
  {
    "id": "videos-autumn-saweb-editing-sequencing-coloring-mp4",
    "title": "AUTUMN + SAWEB (EDITING, SEQUENCING, COLORING)",
    "category": "VIDEOS",
    "type": "video",
    "src": "/content/videos/AUTUMN%20%2B%20SAWEB%20%28EDITING%2C%20SEQUENCING%2C%20COLORING%29.mp4",
    "width": 3000,
    "height": 2160,
    "ratioClass": "wide",
    "durationSeconds": 203.029
  },
  {
    "id": "videos-dexelz-snippet-promotional-video-graphics-sequencing-editing-mp4",
    "title": "Dexelz snippet promotional video(graphics, sequencing, editing)",
    "category": "VIDEOS",
    "type": "video",
    "src": "/content/videos/Dexelz%20snippet%20promotional%20video%28graphics%2C%20sequencing%2C%20editing%29.mp4",
    "width": 3840,
    "height": 2160,
    "ratioClass": "wide",
    "durationSeconds": 16.213
  },
  {
    "id": "videos-jesus-piece-ixvolt-editing-sequencing-mp4",
    "title": "JESUS PIECE - IXVOLT (editing, sequencing)",
    "category": "VIDEOS",
    "type": "video",
    "src": "/content/videos/JESUS%20PIECE%20-%20IXVOLT%20%28editing%2C%20sequencing%29.mp4",
    "width": 1920,
    "height": 1080,
    "ratioClass": "wide",
    "durationSeconds": 168.554
  },
  {
    "id": "videos-nozoki-stage-visuals-mp4",
    "title": "NOZOKI STAGE VISUALS",
    "category": "VIDEOS",
    "type": "video",
    "src": "/content/videos/NOZOKI%20STAGE%20VISUALS.mp4",
    "width": 960,
    "height": 540,
    "ratioClass": "wide",
    "durationSeconds": 6.174
  },
  {
    "id": "videos-rexv2-no-handz-titles-mp4",
    "title": "REXV2 - NO HANDZ (TITLES)",
    "category": "VIDEOS",
    "type": "video",
    "src": "/content/videos/REXV2%20-%20NO%20HANDZ%20%28TITLES%29.mp4",
    "width": 1920,
    "height": 1080,
    "ratioClass": "wide",
    "durationSeconds": 109.738
  },
  {
    "id": "videos-rex-unused-visual-mp4",
    "title": "Rex unused visual",
    "category": "VIDEOS",
    "type": "video",
    "src": "/content/videos/Rex%20unused%20visual.mp4",
    "width": 1280,
    "height": 720,
    "ratioClass": "wide",
    "durationSeconds": 8.043
  },
  {
    "id": "videos-stage-visuals-for-mp4",
    "title": "STAGE VISUALS FOR \"5UCCUBU5\"",
    "category": "VIDEOS",
    "type": "video",
    "src": "/content/videos/Stage%20visuals%20for%20.mp4",
    "width": 1280,
    "height": 720,
    "ratioClass": "wide",
    "durationSeconds": 20.715
  },
  {
    "id": "flyers-5star-rodney-flyer-jpg",
    "title": "5star rodney flyer",
    "category": "flyers",
    "type": "image",
    "src": "/content/flyers/5star%20rodney%20flyer.jpg",
    "width": 864,
    "height": 1080,
    "ratioClass": "tall"
  },
  {
    "id": "flyers-dj-skelz-flyer-jpeg",
    "title": "dj skelz flyer",
    "category": "flyers",
    "type": "image",
    "src": "/content/flyers/dj%20skelz%20flyer.jpeg",
    "width": 2048,
    "height": 2020,
    "ratioClass": "square"
  },
  {
    "id": "flyers-lade-flyer-jpg",
    "title": "lade flyer",
    "category": "flyers",
    "type": "image",
    "src": "/content/flyers/lade%20flyer.jpg",
    "width": 1728,
    "height": 2160,
    "ratioClass": "tall"
  },
  {
    "id": "graphics-dexelz-jpg",
    "title": "dexelz",
    "category": "graphics",
    "type": "image",
    "src": "/content/graphics/dexelz.jpg",
    "width": 1490,
    "height": 836,
    "ratioClass": "wide"
  },
  {
    "id": "graphics-horror-jpg",
    "title": "HORROR",
    "category": "graphics",
    "type": "image",
    "src": "/content/graphics/HORROR.jpg",
    "width": 864,
    "height": 1080,
    "ratioClass": "tall"
  },
  {
    "id": "graphics-hyperpopdaily-flyer-jpg",
    "title": "@hyperpopdaily flyer",
    "category": "graphics",
    "type": "image",
    "src": "/content/graphics/%40hyperpopdaily%20flyer.jpg",
    "width": 1080,
    "height": 1346,
    "ratioClass": "tall"
  },
  {
    "id": "graphics-needorkeep-cover-v1-jpg",
    "title": "@needorkeep cover v1",
    "category": "graphics",
    "type": "image",
    "src": "/content/graphics/%40needorkeep%20cover%20v1.jpg",
    "width": 1080,
    "height": 1350,
    "ratioClass": "tall"
  },
  {
    "id": "graphics-needorkeep-cover-v2-jpg",
    "title": "@needorkeep cover v2",
    "category": "graphics",
    "type": "image",
    "src": "/content/graphics/%40needorkeep%20cover%20v2.jpg",
    "width": 1080,
    "height": 1350,
    "ratioClass": "tall"
  },
  {
    "id": "graphics-needorkeep-graphic-jpg",
    "title": "@needorkeep graphic",
    "category": "graphics",
    "type": "image",
    "src": "/content/graphics/%40needorkeep%20graphic.jpg",
    "width": 1080,
    "height": 1350,
    "ratioClass": "tall"
  },
  {
    "id": "graphics-needorkeep-interview-cover-for-nino-paid-jpg",
    "title": "@needorkeep interview cover for Nino Paid",
    "category": "graphics",
    "type": "image",
    "src": "/content/graphics/%40needorkeep%20interview%20cover%20for%20Nino%20Paid.jpg",
    "width": 1080,
    "height": 1440,
    "ratioClass": "tall"
  },
  {
    "id": "graphics-nohandz-rexv2-unused-title-card-jpg",
    "title": "NOHANDZ - Rexv2 (unused title card)",
    "category": "graphics",
    "type": "image",
    "src": "/content/graphics/NOHANDZ%20-%20Rexv2%20%28unused%20title%20card%29.jpg",
    "width": 2399,
    "height": 1686,
    "ratioClass": "wide"
  },
  {
    "id": "personal-firstpost-jpg",
    "title": "firstpost",
    "category": "PERSONAL",
    "type": "image",
    "src": "/content/PERSONAL/firstpost.jpg",
    "width": 1080,
    "height": 1346,
    "ratioClass": "tall"
  },
  {
    "id": "personal-idk-jpg",
    "title": "idk",
    "category": "PERSONAL",
    "type": "image",
    "src": "/content/PERSONAL/idk.jpg",
    "width": 1080,
    "height": 1080,
    "ratioClass": "square"
  },
  {
    "id": "personal-personal-post-jpg",
    "title": "personal post",
    "category": "PERSONAL",
    "type": "image",
    "src": "/content/PERSONAL/personal%20post.jpg",
    "width": 1080,
    "height": 1346,
    "ratioClass": "tall"
  },
  {
    "id": "personal-trippy-visuals-mp4",
    "title": "trippy visuals",
    "category": "PERSONAL",
    "type": "video",
    "src": "/content/PERSONAL/trippy%20visuals.mp4",
    "width": 720,
    "height": 720,
    "ratioClass": "square",
    "durationSeconds": 14
  },
  {
    "id": "personal-personal-visual-mp4",
    "title": "personal visual",
    "category": "PERSONAL",
    "type": "video",
    "src": "/content/PERSONAL/PERSONAL%20VISUAL.mp4",
    "width": 720,
    "height": 1280,
    "ratioClass": "tall",
    "durationSeconds": 13.4
  },
  {
    "id": "personal-xumm3r-logo-jpg",
    "title": "xumm3r logo",
    "category": "PERSONAL",
    "type": "image",
    "src": "/content/PERSONAL/xumm3r%20logo.jpg",
    "width": 605,
    "height": 187,
    "ratioClass": "wide"
  }
];

export const featuredAssetIds = [
  "covers-final-warning-glokk40spaz-jpg",
  "videos-dexelz-snippet-promotional-video-graphics-sequencing-editing-mp4",
  "covers-22-tg-jpg",
  "personal-trippy-visuals-mp4",
  "covers-b4-vic-vic-jpg",
  "videos-stage-visuals-for-mp4",
  "flyers-dj-skelz-flyer-jpeg",
  "flyers-lade-flyer-jpg",
  "graphics-horror-jpg",
  "personal-idk-jpg",
  "personal-firstpost-jpg"
] as const;

export const featuredAssets: PortfolioAsset[] = featuredAssetIds
  .map((id) => allAssets.find((asset) => asset.id === id))
  .filter((asset): asset is PortfolioAsset => Boolean(asset));

export function getAssetsByCategory(category: CategoryName): PortfolioAsset[] {
  return allAssets.filter((asset) => asset.category === category);
}

export const xumm3rLogoAsset = allAssets.find((asset) => asset.id === "personal-xumm3r-logo-jpg");
export const visualsAsset = allAssets.find((asset) => asset.id === "personal-personal-visual-mp4");
