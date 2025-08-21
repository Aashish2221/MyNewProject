
export interface BlogInterface {
    createTS: Date;
    id: number;
    actionUrl?: string;
    image: string;
    isActive: boolean;
    newsType: number;
    publishDate: Date;
    title: string;
    description: string;
    publishby: string;
    newsTypeName: string;
    metaTitle: string;
    metaKeywords: string;
    metaDescription: string;
    sanitizeDescription?: string;
    isBlog: true;
    newsTitleWithHypen?: string;
    bgColour?: string;
  }
  