// -------------------- MINT CATEGORY INTERFACE --------------------
export interface mintCategory {
  id: string;
  entityTypeName: string;
  name: string;
  entityType: string;
  recFound: number;
}
// -------------------- WEIGHT CATEGORY INTERFACE --------------------
export interface weightCategory {
  itemWeight: string;
  itemWeightCount: number;
}
// -------------------- YEAR CATEGORY INTERFACE --------------------
export interface yearReleasedCategory {
  yearReleased: string;
  yearReleasedCount: number;
}
// -------------------- SERIES CATEGORY INTERFACE --------------------
export interface seriesCategory {
  seriesId: string;
  series: string;
}
// -------------------- MISC CATEGORY INTERFACE --------------------
export interface miscCategory {
  miscId: number;
  miscName: string;
}
// -------------------- TAG CATEGORY INTERFACE --------------------
export interface productTagsCategory {
  tagId: number,
  tag: string
}
// -------------------- SEO METADATA INTERFACE --------------------
export interface seoMetaData {
  metaTitle: string;
  metaDescription: string;
}
// -------------------- SEO CONTENT INTERFACE --------------------
export interface seoContent {
  content: string;
  contentHeading: string;
}
// -------------------- FILTER MENU SELECTION INTERFACE --------------------
export interface filterSelection {
  mints?: mintCategory[];
  weight?: weightCategory[];
  years?: yearReleasedCategory[];
  series?: seriesCategory[];
  misc?: miscCategory[];
}