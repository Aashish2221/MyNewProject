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
  createTS: string;
  ratingValue?: number;
  ratingCount?: number;
  averageRating?: number;
}

export interface dataList {
  customerReview: CustomerReview[];
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
