// Canonical image sources shared by the established fish pages and QUEST.
// New profiles supply media.image; existing images retain their exact URLs.
export const establishedFishImages:Record<string,string>={
  "tachiuo": "/images/fish/tachiuo-real-v2.png",
  "aji": "/images/fish/aji-real-v2.png",
  "saba": "/images/fish/saba-real-v2-new.png",
  "madai": "/images/fish/madai-real-v2.png",
  "buri": "/images/fish/buri-real-v2.png?v=20260911-2",
  "kisu": "/images/fish/kisu-real-v2.png?v=20260911-1",
  "kasago": "/images/fish/kasago-real-v2.png?v=20260911-1"
};
export function getFishImage(fish:{slug:string;media?:{image:string}}){return fish.media?.image??(Object.hasOwn(establishedFishImages,fish.slug)?establishedFishImages[fish.slug]:undefined)}
