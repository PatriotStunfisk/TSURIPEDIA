import editorialData from './gear-editorial-data.json';

export type GearEditorial = {
  overview: string;
  designs: { name: string; title: string; body: string; model?: string }[];
  use: string;
  selection: string;
  sourceUrls: string[];
};

// Keep long-form explanations out of the catalogue/search payload.
const editorials: Record<string, GearEditorial> = editorialData;
export function getGearEditorial(slug: string): GearEditorial | undefined {
  return editorials[slug];
}
