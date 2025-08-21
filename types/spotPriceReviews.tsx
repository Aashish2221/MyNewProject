export interface CustomerReview {
    productId: number;
    rating: number;
    reviewHead: string;
    reviewText: string;
    productNameWithHypen: string;
    customerName: string;
    productImage: string;
    isVerified: boolean;
    imagePath: string;
  }
  
  export interface dataList {
    customerReview: CustomerReview[];
    reviewPending:reviewPending
  }
  
  export interface Page {
    size: number;
    totalElements: number;
    totalPages: number;
    pageNumber: number;
  }
  
  export interface customerReviewForHomePageInterFace {
    data: any;
    page: Page;
    dataList: dataList;
  }
  
  export interface reviewPending {
    isReviewPending :boolean
    rating :number
    totalReview :number
  }