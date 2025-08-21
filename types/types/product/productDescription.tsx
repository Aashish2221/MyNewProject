import { MetalType } from "../spotPrices";
import { RibbonInterface, StocksInterface } from "./productInfo";

export interface productDescriptionImages {
  id: number;
  srNo: number;
  imagePath: string;
  isDefaultThumbNail: boolean;
  isActive: boolean;
  description: string | string | null;
  desktopThumbnailUrl: string;
  mobileThumbnailUrl: string;
}
export interface lowestPrices {
  productId: number;
  price: number;
  source: string;
  discount: number;
  asLowAsText: string;
}
export interface ProductSpotInterface {
  silverAsk: number;
  goldAsk: number;
  platinumAsk: number;
  palladiumAsk: number;
}

export interface MintSeriesArray {
  mintCode: string;
  seriesCode: string;
  mintName: string;
  seriesName:string;
  metalCode: string;
}

export interface ProductDetailsBreadCrumbs {
  supplyCategoryName: string;
  supplyCategoryCode: string;
  id: number;
  code: number;
  name: string;
  entityTypeName: string;
  metalType: string;
  mint: string;
  series: string;
  metalCode: string;
  mintCode: string;
  seriesCode: string;
}
export interface JewelryCouponCode {
  couponCode: string
  expiryDate: string
  percentage: number
  discountType: any
  couponTitle: string
  couponHeader: string
  termAndConditions: string
  imageUrl: string
  isActive:boolean
}

export interface productDescription {
  impairedProductId?: number;
  isImpaired?: boolean;
  breads?: ProductDetailsBreadCrumbs[];
  mintSeries: MintSeriesArray[];
  jwCoupons?:JewelryCouponCode[];
  jweleryType?: string;
  size?: number;
  sizeable?: string;
  metal_Desc?: string;
  gem_Weight?: number;
  cT_Weight?: number;
  weight?: number;
  id: number;
  country_Of_Origin: string;
  sku: string;
  name: string;
  shortName: string;
  keywords: string | string;
  imagePath: string | string;
  mobileThumbnailUrl: string | string | null;
  description: string;
  ribbonColor: string;
  ribbonText: string;
  taxStatus: string;
  salesTaxCode: string;
  publlishedDate?: Date;
  post_excerpt_A: string;
  post_excerpt_B: string | string | null;
  post_excerpt_C: string;
  post_excerpt_D: string | string | null;
  defaultShelfId: number;
  defaultSubShelfId: number;
  ebayListingId: string;
  isGrouped: boolean;
  isChild: boolean;
  picklist_memo: string | string | null;
  currentStatusId: number;
  currentStockInHand: number;
  currentPrimaryStock: number;
  currentSecondaryStock: number;
  currentTertiaryStock: number;
  primaryStockUpdateTS: string;
  secondaryStockUpdateTS: string;
  tertiaryStockUpdateTS: string;
  dgWareHouseStock: number;
  allocatedAgainstInstock: number;
  allocatedAgainstTertiary: number;
  allocatedAgainstDGWarehouse: number;
  fourthWareHouseStock: number;
  allocatedAgainst4thWareHouse: number;
  fourthWareHouseShipmentDate: string;
  isImpairedQty: number;
  impairedDiscount: number;
  allocatedAgainstImpaired: number;
  record_Complete: boolean;
  isMigrated: boolean;
  isActive: boolean;
  certificateSource: string | string | null;
  certificateGrade: string | string | null;
  unitMeasures: string;
  purity: string;
  thickness: string;
  diameter: string;
  yearReleased: string;
  origin: string;
  metalComposition: MetalType;
  faceWeight: number;
  standardizedWeight: number;
  denomination: string;
  ounces: number;
  itemWeight: string;
  videoUrl: string | string | null;
  isPreSale: boolean;
  mintMark: string | string | null;
  mintage: string | string | null;
  randomSKUs: string | string | null;
  shippingDate: string;
  embargoDate: string | string | null;
  capsuledCoin: string;
  capsuleSKU: string;
  tubeSize: number;
  boxSize: number;
  relatedSKUsOverride: string | string | null;
  lot: number;
  countryId: number;
  countryCode: string;
  countryName: string;
  mintId: string;
  mintCode: string;
  mintName: string | string | null;
  seriesId: string;
  seriesCode: string;
  series: string;
  gradeId: number;
  gradeCode: string | string | null;
  grade: string;
  metalId: number;
  metalCode: string;
  metal: string;
  productTypeId: string;
  productType: string;
  productTypeCode: string;
  floor_Premium: number;
  ceiling_Premium: number;
  askDollars1: number;
  askDollars2: number;
  askDollars3: number;
  askDollars4: number;
  askDollars5: number;
  tier1Min: number;
  tier2Min: number;
  tier3Min: number;
  tier4Min: number;
  tier5Min: number;
  tier1Max: number;
  tier2Max: number;
  tier3Max: number;
  tier4Max: number;
  tier5Max: number;
  wholeSalePremium: number;
  activeSalesEventId: number;
  discountType: string;
  qtyPlanned: number;
  qtySold: number;
  discount: number;
  salesEventName: string;
  salesExpiryDate: string;
  wholeSaleStock: number;
  allocateAgainstWholesale: number;
  wholeSaleUpdateTs: string;
  priceType: number;
  fixedPrice: number;
  backOrderDiscountDivisor: number;
  wholeSaleTertiaryStock: number;
  allocatedAgainstWholeSaleTertiaryStock: number;
  wholeSale4thWarehouseStock: number;
  allocatedAgainstWholeSale4thWarehouseStock: number;
  wholesaleTier1: number;
  backOrderWholeSalePremium: number;
  wholeSaleImapairedStock: number;
  allocatedAgainstWholeSaleImpairedStock: number;
  wholesaleImpairedDiscount: number;
  wholesaleFixedPriceDiscount: number;
  isWholeSaler: boolean;
  isClearanceProduct: boolean;
  isProductSoldBefore: boolean;
  expectedShipmentDate: string;
  instockShipmentDate: string;
  instockExpectedShipmentDateRange: string | string | null;
  isNewArrivalProduct: boolean;
  excludeOutOfStock: boolean;
  metaTitle: string;
  metaDesc: string;
  altText: string;
  menuLinkId: string | string | null;
  childs: Child[];
  images: productDescriptionImages[];
  dummyInventoryReduction: number;
  tertiaryDummyInventoryReduction: number;
  isBulkOrder: boolean;
  tip: number;
  rating: number;
  reviewCount: number;
  productNameWithHypen: string;
  backorderPlanQty: number;
  backorderSoldQty: number;
  availableTierCount: number;
  asLowAs: lowestPrices[];
  stocks: StocksInterface[];
  productFAQResult: productFAQResultInterface[];
  ribbon: RibbonInterface;
  spot: ProductSpotInterface;
  quantity?: number;
  productImage: productDescriptionImages[];
  listOfSpecsJson?: string;
  oldPrice:number;
}
export interface Child {
  parentProductId: number;
  childProductId: number;
  priceType: number;
  stock: number;
  metal: string;
  floor_Premium: number;
  ceiling_Premium: number;
  askDollars1: number;
  askDollars2: number;
  askDollars3: number;
  askDollars4: number;
  askDollars5: number;
  tier1Min: number;
  tier2Min: number;
  tier3Min: number;
  tier4Min: number;
  tier5Min: number;
  tier1Max: number;
  tier2Max: number;
  tier3Max: number;
  tier4Max: number;
  tier5Max: number;
  qty: number;
  ounces: number;
  fixedPrice: number;
  childFloorWithPrice: any;
  spot: any;
}
export interface JewelrySpecifications {
  JewelryType: string;
}
export interface productFAQResultInterface {
  id: number;
  faqQuestion: string;
  faqDescription: string;
}
export interface productReview {
  id: number;
  productId: number;
  rating: number;
  reviewHead: string;
  reviewText: string;
  reviewByCustomerId: number;
  isActive: boolean;
  deletedByUserId: number;
  deletedOn: string;
  deletedComment: string | null;
  createTs: string;
  firstName: string;
  lastName: string;
  customerName: string;
  userName: string | null;
  isVerified: boolean;
  comments: string | null;
  name: string | null;
}
