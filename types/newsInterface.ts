export interface NewsInterface {
   data:{
     data: null;
      page: NewsPage;
      dataList: NewsDataList[];
   }
  }
  
  export interface NewsPage {
    size: number;
    totalElements: number;
    totalPages: number;
    pageNumber: number;
  }
  
  export interface NewsDataList {
    id: number;
    newsType: number;
    title: string;
    publishby: string;
    description: string;
    image: string;
    publishDate: string;
    createTS: string;
    isActive: boolean;
    newsTypeName: string;
    metaTitle: string;
    metaKeywords: string;
    metaDescription: string;
    actionUrl?: string;
    newsTitleWithHypen: string;
    type: string;
    code: any;
    bgColour: any;
  }
  