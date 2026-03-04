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
  "NEEDORKEEP WORK",
  "PERSONAL"
] as const;

export type CategoryName = (typeof categoryOrder)[number];

export const categorySlugMap: Record<CategoryName, string> = {
  covers: "covers",
  graphics: "graphics",
  flyers: "flyers",
  "NEEDORKEEP WORK": "needorkeep-work",
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
    "title": "22 TG",
    "category": "covers",
    "type": "image",
    "src": "/content/covers/22%20-%20TG.jpg",
    "width": 3000,
    "height": 3000,
    "ratioClass": "square"
  },
  {
    "id": "covers-b4-vic-vic-jpg",
    "title": "B4 Vic Vic",
    "category": "covers",
    "type": "image",
    "src": "/content/covers/B4%20Vic%20-%20Vic.jpg",
    "width": 1179,
    "height": 1179,
    "ratioClass": "square"
  },
  {
    "id": "covers-beautriful-nightmare-iyagi-jpg",
    "title": "Beautriful nightmare iyagi",
    "category": "covers",
    "type": "image",
    "src": "/content/covers/_Beautriful%20nightmare_%20-%20iyagi.jpg",
    "width": 1080,
    "height": 1080,
    "ratioClass": "square"
  },
  {
    "id": "covers-final-warning-glokk40spaz-jpg",
    "title": "final warning glokk40spaz",
    "category": "covers",
    "type": "image",
    "src": "/content/covers/final%20warning%20-%20glokk40spaz.jpg",
    "width": 1416,
    "height": 1416,
    "ratioClass": "square"
  },
  {
    "id": "covers-money-angel-iyagi-jpg",
    "title": "Money Angel Iyagi",
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
    "title": "Vanguard Prototype",
    "category": "covers",
    "type": "image",
    "src": "/content/covers/Vanguard%20-%20Prototype.jpg",
    "width": 2028,
    "height": 2028,
    "ratioClass": "square"
  },
  {
    "id": "covers-where-we-left-off-wxnter-jpg",
    "title": "Where we left off Wxnter",
    "category": "covers",
    "type": "image",
    "src": "/content/covers/_Where%20we%20left%20off_%20-%20Wxnter.jpg",
    "width": 1179,
    "height": 1179,
    "ratioClass": "square"
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
    "id": "graphics-horrorv2-jpg",
    "title": "HORRORv2",
    "category": "graphics",
    "type": "image",
    "src": "/content/graphics/HORRORv2.jpg",
    "width": 864,
    "height": 1080,
    "ratioClass": "tall"
  },
  {
    "id": "graphics-nohandz-jpg",
    "title": "NOHANDZ",
    "category": "graphics",
    "type": "image",
    "src": "/content/graphics/NOHANDZ.jpg",
    "width": 2399,
    "height": 1686,
    "ratioClass": "square"
  },
  {
    "id": "graphics-undergroundfest-jpg",
    "title": "undergroundfest",
    "category": "graphics",
    "type": "image",
    "src": "/content/graphics/undergroundfest.jpg",
    "width": 1080,
    "height": 1346,
    "ratioClass": "tall"
  },
  {
    "id": "needorkeep-work-nok-graphic-2-jpg",
    "title": "NOK GRAPHIC 2",
    "category": "NEEDORKEEP WORK",
    "type": "image",
    "src": "/content/NEEDORKEEP%20WORK/NOK%20GRAPHIC%202.jpg",
    "width": 1080,
    "height": 1350,
    "ratioClass": "tall"
  },
  {
    "id": "needorkeep-work-nok-interview-cover-template-jpg",
    "title": "NOK INTERVIEW COVER TEMPLATE",
    "category": "NEEDORKEEP WORK",
    "type": "image",
    "src": "/content/NEEDORKEEP%20WORK/NOK%20INTERVIEW%20COVER%20TEMPLATE.jpg",
    "width": 1080,
    "height": 1440,
    "ratioClass": "tall"
  },
  {
    "id": "needorkeep-work-nok-template-v1-jpg",
    "title": "NOK TEMPLATE V1",
    "category": "NEEDORKEEP WORK",
    "type": "image",
    "src": "/content/NEEDORKEEP%20WORK/NOK%20TEMPLATE%20V1.jpg",
    "width": 1080,
    "height": 1350,
    "ratioClass": "tall"
  },
  {
    "id": "needorkeep-work-nok-template-v2-jpg",
    "title": "NOK TEMPLATE V2",
    "category": "NEEDORKEEP WORK",
    "type": "image",
    "src": "/content/NEEDORKEEP%20WORK/NOK%20TEMPLATE%20V2.jpg",
    "width": 1080,
    "height": 1350,
    "ratioClass": "tall"
  },
  {
    "id": "needorkeep-work-nok-template-v3-jpg",
    "title": "NOK TEMPLATE V3",
    "category": "NEEDORKEEP WORK",
    "type": "image",
    "src": "/content/NEEDORKEEP%20WORK/NOK%20TEMPLATE%20V3.jpg",
    "width": 1080,
    "height": 1350,
    "ratioClass": "tall"
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
    "id": "personal-visuals-mp4",
    "title": "visuals",
    "category": "PERSONAL",
    "type": "video",
    "src": "/content/PERSONAL/visuals.mp4",
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
  "covers-22-tg-jpg",
  "personal-idk-jpg",
  "covers-final-warning-glokk40spaz-jpg",
  "flyers-dj-skelz-flyer-jpeg",
  "personal-trippy-visuals-mp4",
  "covers-vanguard-prototype-jpg",
  "graphics-horror-jpg",
  "graphics-undergroundfest-jpg",
  "covers-b4-vic-vic-jpg",
  "personal-firstpost-jpg"
] as const;

export const featuredAssets: PortfolioAsset[] = featuredAssetIds
  .map((id) => allAssets.find((asset) => asset.id === id))
  .filter((asset): asset is PortfolioAsset => Boolean(asset));

export function getAssetsByCategory(category: CategoryName): PortfolioAsset[] {
  return allAssets.filter((asset) => asset.category === category);
}

export const xumm3rLogoAsset = allAssets.find((asset) => asset.id === "personal-xumm3r-logo-jpg");
export const visualsAsset = allAssets.find((asset) => asset.id === "personal-visuals-mp4");
