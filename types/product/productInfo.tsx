import { InventoryType } from "../types";

export interface FloorWithPriceInterface {
  floorMin: number;
  floorMax: number;
  floor: string;
  price: number;
  discountPrice: number;
  impairedPrice: number;
  inStockWholeSalePrice: number;
  backOrderWholeSalePrice: number;
  impairedWholeSalePrice: number;
  wholesaleTierOnePrice: number;
  wholesaleTierOneDiscountedPrice: number;
  wholeSaleBackorderdPriceAsTier: number;
  askPrice: number;
  tipPrice: number;
  retailBackOrderedPriceAsTier: number;
  retailBackOrderedDiscountPriceAsTier: number;
}
export interface StocksInterface {
  stockName: InventoryType;
  stockQty: number;
  isSale: boolean;
  saleQty: number;
  stockCode: string;
  floorWithPrices: FloorWithPriceInterface[];
  productSizes: JewelryProductSize[];
}
export interface JewelryProductSize {
  quantity: number;
  size: number;
  weight: number;
  price: number;
}

export interface RibbonInterface {
  color: string;
  amount?: number;
  label: string;
  type: string | undefined;
}

export interface productSpecificTags {
  productId: number;
  tagId: number;
  tagname: string;
}

// -------------------- LOWEST PICES INTERFACE --------------------
export interface lowestPrices {
  productId: number;
  price: number;
  source: string;
  discount: number;
  asLowAsText: string;
}
// -------------------- PRODUCT INFO INTERFACE --------------------
export interface productInfo {
  watchlistId:number;
  productInventorySource: string;
  secondImagePath?: string;
  id: number;
  price: number;
  premium: number;
  yearReleased: string;
  sku: string;
  name: string;
  shortName: string;
  isActive: boolean;
  imagePath: string;
  mobileThumbnailUrl: string;
  currentStockInHand: number;
  currentPrimaryStock: number;
  currentSecondaryStock: number;
  currentTertiaryStock: number;
  allocatedAgainstInstock: number;
  allocatedAgainstTertiary: number;
  floor_Premium: number;
  ceiling_Premium: number;
  dgWareHouseStock: number;
  allocatedAgainstDGWarehouse: number;
  fourthWareHouseStock: number;
  allocatedAgainst4thWareHouse: number;
  fourthWareHouseShipmentDate: string;
  tertiaryExpectedShipmentDate: string;
  allocatedAgainstImpaired: number;
  askDollars1: number;
  askDollars2: number;
  askDollars3: number;
  askDollars4: number;
  askDollars5: number;
  tier1Min: number;
  tier1Max: number;
  tier2Min: number;
  tier2Max: number;
  tier3Min: number;
  tier3Max: number;
  tier4Min: number;
  tier4Max: number;
  tier5Min: number;
  tier5Max: number;
  metalId: number;
  ounces: number;
  metal: string;
  activeSalesEventId: number;
  productTypeId: number;
  productType: string;
  productTypeCode: string;
  discountType: string;
  qtyPlanned: number;
  qtySold: number;
  discount: number;
  salesEventName: null | string;
  salesExpiryDate: string;
  isPreSale: boolean;
  expiryDate: string;
  wholSalePremium: number;
  wholeSaleStock: number;
  allocateAgainstWholesale: number;
  wholeSaleUpdateTs: string;
  priceType: number;
  fixedPrice: number;
  backOrderDiscountDivisor: number;
  isGrouped: boolean;
  allocatedAgainstWholeSale4thWarehouseStock: number;
  allocatedAgainstWholeSaleTertiaryStock: number;
  wholeSale4thWarehouseStock: number;
  wholeSaleImapairedStock: number;
  allocatedAgainstWholeSaleImpairedStock: number;
  wholesaleFixedPriceDiscount: number;
  wholeSaleTertiaryStock: number;
  wholesaleTier1: number;
  isClearanceProduct: boolean;
  isProductSoldBefore: boolean;
  dummyInventoryReduction: number;
  tertiaryDummyInventoryReduction: number;
  productNameWithHypen: string;
  expectedShipmentDate: string;
  instockExpectedShipmentDateRange: string;
  isChild: boolean;
  salesTaxCode: string;
  taxStatus: string;
  backorderPlanQty: number;
  backorderSoldQty: number;
  availableTierCount: number;
  childs: any;
  isImpairedQty: number;
  impairedDiscount: number;
  asLowAs: lowestPrices[];
  stocks: StocksInterface[];
  ribbon: RibbonInterface;
  productSpecificTags: productSpecificTags[];
  faceWeight?: number;
  post_excerpt_C?: string;
  width?: number;
  length?: number;
  mintCode?: string;
}
// -------------------- MINT CATEGORY INTERFACE --------------------
export interface mintCategory {
  id: string;
  entityTypeName: string;
  name: string;
  entityType: string;
  recFound: number;
}
export interface breadCrumbsData {
  code: string;
  entityTypeName: string;
  id: string;
  name: string;
}
// -------------------- WEIGHT CATEGORY INTERFACE --------------------
export interface weightCategory {
  itemWeight: string;
  itemWeightCount: number;
}
// -------------------- YEAR CATEGORY INTERFACE --------------------
export interface yearCategory {
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
export interface tagCategory {
  tagId: number;
  tag: string;
}
// -------------------- SEO METADATA INTERFACE --------------------
export interface seoMataData {
  metaTitle: string;
  metaDescription: string;
}
// -------------------- SEO CONTENT INTERFACE --------------------
export interface seoContent {
  content: string | null;
  contentHeading: string | null;
  canonicalUrl: string | null;
}
// -------------------- DATALISTING INTERFACE --------------------

export interface SearchResponseInterface {
  data: productInfo[];
  page: Page;
  dataList: dataList;
}

export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  pageNumber: number;
}
export interface lowestPriceProduct {
  price: number;
  productId: number;
}
export interface dataList {
  breadCrumbs: breadCrumbsData[];
  lowestPrice?: lowestPriceProduct[];
  searchProducts: productInfo[];
  mints: mintCategory[];
  itemWeights: weightCategory[];
  yearReleased: yearCategory[];
  serieslist: seriesCategory[];
  misc: miscCategory[];
  tags: tagCategory[];
  seoMataData: seoMataData;
  seoContent: seoContent;
}

export interface customerReview {
  productId: number;
  rating: number;
  reviewByCustomerId: number;
  reviewHead: string;
  reviewText: string;
}

export interface productReviewInterface {
  showReadMore: boolean;
  productMetal: string;
  id: number;
  productImage?: string;
  showmoreless?: boolean;
  comments: string;
  productId: number;
  productName: string;
  rating: number;
  reviewHead: string;
  reviewText: string;
  reviewByCustomerId: number;
  reviewStatus: string;
  isActive: boolean;
  createTs: Date;
  reviewStatusByAdminId: number;
  customerName: string;
  profilePhoto: string;
  userName?: string;
  isVerified?: boolean;
  productNameWithHypen?: string;
  isReviewApproved?: boolean;
}
export interface DashboardImageAction {
  id: number;
  dashboardImageId: number;
  buttonText: string;
  searchBy: string;
  action: string;
  metalId: number;
  mintId: number;
  seriesId: number;
  tagId: number | null;
  productTypeId: number;
  gradeId: number;
  miscId: number;
  productId: number;
  productName: string | null;
  productNameWithHypen: string | null;
  href: string;
}

export interface DashboardCarouselInterface {
  id: number;
  appImageUrl: string;
  webImageUrl: string;
  appBackgroundImage: string;
  webBackgroundImage: string;
  isActive: boolean;
  imageLocationOnUI: string;
  actions: DashboardImageAction[];
  audience: string | null;
  position: number;
  productId: number | null;
  sequenceNo: number;
  customerType: string;
  metalType: string;
}
