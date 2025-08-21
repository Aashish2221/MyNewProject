import { shipping } from "./checkOut";
import {
  mintCategory,
  miscCategory,
  seriesCategory,
  productTagsCategory,
  weightCategory,
  yearReleasedCategory,
  seoMetaData,
  seoContent,
} from "./filterMenuTypes";

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
export interface JewelryProductSize {
  quantity: number;
  size: number;
  weight: number;
  price: number;
}

export interface StocksInterface {
  stockName: string;
  stockCode: string;
  stockQty: number;
  isSale: boolean;
  saleQty: number;
  floorWithPrices: FloorWithPriceInterface[];
  productSizes: JewelryProductSize[];
}
// -------------------- PRODUCTS LISTING INTERFACE --------------------
export interface Products {
  srNo?: number;
  id: any;
  price: number;
  premium: number;
  yearReleased: string | number | Date;
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
  quantity: number;
  discount: number;
  salesEventId: number;
  salesEventName: string | null;
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
  childs: [];
  isImpairedQty: number;
  impairedDiscount: number;
  asLowAs: [
    {
      productId: number;
      price: number;
      source: string;
      discount: number;
      asLowAsText: string;
    },
    {
      productId: number;
      price: number;
      source: string;
      discount: number;
      asLowAsText: string;
    }
  ];
  stocks: StocksInterface[];
}
export interface Cart {
  salesEventId: number;
  activeSalesEventId: number;
  allocateAgainstWholesale: number;
  allocatedAgainst4thWareHouse: number;
  allocatedAgainst4thWarehouseStock: number;
  allocatedAgainstDGWarehouse: number;
  allocatedAgainstImpaired: number;
  allocatedAgainstInstock: number;
  allocatedAgainstTertiary: number;
  allocatedAgainstWholeSaleImpairedStock: number;
  allocatedAgainstWholeSaleTertiaryStock: number;
  asLowAs: string | null;
  askDollars1: number;
  askDollars2: number;
  askDollars3: number;
  askDollars4: number;
  askDollars5: number;
  availableTierCount: number;
  backOrderDiscountDivisor: number;
  backOrderWholeSalePremium: number;
  backorderPlanQty: number;
  backorderSoldQty: number;
  ceiling_Premium: number;
  childs: [];
  currentPrimaryStock: number;
  currentSecondaryStock: number;
  currentStockInHand: number;
  currentTertiaryStock: number;
  customerId: number;
  dgWareHouseStock: number;
  discount: number;
  discountType: string;
  dummyInventoryReduction: number;
  expectedShipByDate: number;
  expectedShipmentDate: string | null;
  fixedPrice: number;
  stocks: StocksInterface[];
  floor_Premium: number;
  fourthWareHouseShipmentDate: string;
  fourthWareHouseStock: number;
  imagePath: string;
  impairedDiscount: number;
  instockExpectedShipmentDateRange: string;
  isActive: boolean;
  isChild: boolean;
  isClearanceProduct: boolean;
  isGrouped: boolean;
  isImpairedQty: number;
  isPreSale: boolean;
  metal: string;
  metalId: number;
  ounces: number;
  parentProductId: number;
  price: number;
  priceType: number;
  primaryStockUpdateTS: string;
  productId: number;
  productInventorySource: string;
  productName: string;
  productNameWithHypen: string;
  qtyPlanned: number;
  qtySold: number;
  quantity: number;
  salesEventName: string | null;
  salesExpiryDate: string;
  secondaryStockUpdateTS: string;
  selected: boolean;
  shoppingCartId: number;
  sku: string;
  status: string | null;
  taxCode: string;
  taxStatus: string | null;
  tertiaryDummyInventoryReduction: number;
  tertiaryStockUpdateTS: string;
  tier1Max: number;
  tier1Min: number;
  tier2Max: number;
  tier2Min: number;
  tier3Max: number;
  tier3Min: number;
  tier4Max: number;
  tier4Min: number;
  tier5Max: number;
  tier5Min: number;
  wholeSale4thWarehouseStock: number;
  wholeSaleImapairedStock: number;
  wholeSalePremium: number;
  wholeSaleStock: number;
  wholeSaleTertiaryStock: number;
  wholeSaleUpdateTS: string | null;
  wholesaleFixedPriceDiscount: number;
  wholesaleImpairedDiscount: number;
  wholesaleTier1: number;
}
export interface Coupon {
  isValid: boolean;
  couponId: number;
  currentBalance: number;
  couponCode: string;
  couponType: string;
  applicableProducts: string | null;
}
export interface mintCategoryMenu {
  label?: string;
  href?: string;
}
export interface weightCategoryMenu {
  label?: string;
  href?: string;
  backgroundColor?: string;
  textColor?: string;
  mintMenu?: mintCategoryMenu[];
}
export interface optionsMenu {
  label?: string;
  href?: string;
  backgroundColor?: string;
  textColor?: string;
  weightCategoryMenu?: weightCategoryMenu[];
}
export interface hamburgerMenu {
  id: number;
  label?: string;
  href?: string;
  options?: optionsMenu[];
}
export interface hamburgerDesktopMenu {
  id: number;
  label?: string;
  href?: string;
  options?: optionsMenu[];
}

// -------------------- PRODUCT DETAILS INTERFACE --------------------
export interface productDetails {
  id: number;
  sku: string;
  name: string;
  shortName: string;
  keywords: string;
  imagePath: string | null;
  mobileThumbnailUrl: string | null;
  description: string;
  ribbonColor: string | null;
  ribbonText: string | null;
  taxStatus: string;
  salesTaxCode: string;
  post_excerpt_A: string;
  post_excerpt_B: string | null;
  post_excerpt_C: string;
  post_excerpt_D: string | null;
  defaultShelfId: number;
  defaultSubShelfId: number;
  ebayListingId: string;
  isGrouped: boolean;
  isChild: boolean;
  picklist_memo: null;
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
  certificateSource: null;
  certificateGrade: null;
  unitMeasures: string;
  purity: string;
  thickness: string;
  diameter: string;
  yearReleased: string;
  origin: string;
  metalComposition: string;
  faceWeight: number;
  standardizedWeight: number;
  denomination: string;
  ounces: number;
  itemWeight: string;
  videoUrl: null;
  isPreSale: boolean;
  mintMark: null;
  mintage: null;
  randomSKUs: null;
  shippingDate: string;
  embargoDate: null;
  capsuledCoin: string;
  capsuleSKU: string;
  tubeSize: number;
  boxSize: number;
  relatedSKUsOverride: null;
  lot: number;
  countryId: number;
  countryCode: string;
  countryName: string;
  mintId: string;
  mintCode: string;
  mintName: null;
  seriesId: string;
  seriesCode: string;
  series: string;
  gradeId: number;
  gradeCode: null;
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
  expectedShipmentDate: null;
  instockShipmentDate: string;
  instockExpectedShipmentDateRange: null;
  isNewArrivalProduct: boolean;
  excludeOutOfStock: boolean;
  metaTitle: string;
  metaDesc: string;
  altText: string;
  menuLinkId: null;
  childs: null;
  images: [
    {
      id: number;
      srNo: number;
      imagePath: string;
      isDefaultThumbNail: boolean;
      isActive: boolean;
      description: null;
      desktopThumbnailUrl: string;
      mobileThumbnailUrl: string;
    },
    {
      id: number;
      srNo: number;
      imagePath: string;
      isDefaultThumbNail: boolean;
      isActive: boolean;
      description: null;
      desktopThumbnailUrl: string;
      mobileThumbnailUrl: string;
    }
  ];
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
  asLowAs: [
    {
      productId: number;
      price: number;
      source: string;
      discount: number;
      asLowAsText: string;
    }
  ];
  stocks: StocksInterface[];
}
// -------------------- SPOT PRICES INTERFACE --------------------
export interface Pnl {
  totalCurrentAssetValue: number;
  dayPnlDollar: number;
  dayChangePercentage: number;
}
export interface spotPrices {
  timestamp: string;
  spotTime: string;
  platinumChangePercent: number;
  goldAsk: number;
  platinumChange: number;
  silverAsk: number;
  silverBid: number;
  silverChangePercent: number;
  goldBid: number;
  platinumAsk: number;
  goldChangePercent: number;
  platinumBid: number;
  goldChange: number;
  palladiumBid: number;
  palladiumChangePercent: number;
  activeFeed: null;
  palladiumChange: number;
  areStale: number;
  silverChange: number;
  palladiumAsk: number;
  pnl: Pnl[];
}
// -------------------- TAG CATEGORY INTERFACE --------------------
export interface TagCategory {
  mobileBannerImagePath: string;
  id: number;
  tagId: string;
  bannerImagePath: string;
  label: string;
  description: string;
  createTS: string;
  createdBy: string;
  descriptionTitle: string | null;
  isActive: boolean;
  searchTags: string;
  seoContent: string | null;
  metaTitle: string;
  metaDescription: string;
}
// -------------------- EXISTING USER LOGIN PAYLOAD --------------------
export interface existingUserPayload {
  emailId: string;
  password: string;
  screenSize: string;
  sessionID: string;
  token: "";
}
// -------------------- EXISTING USER INTERFACE --------------------
export interface existingUser {
  id: number;
  firstName: string;
  lastName: string;
  mobNo: string;
  emailId: string;
  password: null;
  isActive: boolean;
  createdDate: string;
  lastLoginDate: string;
  profilePhoto: string | null;
  iswholeSaler: boolean;
  token: string;
  screenSize: string | null;
  sessionID: string | null;
  isGuest: boolean;
  isPasswordSetOnNewSystem: boolean;
  shippingAddressId: number;
  isBlackList: boolean;
  aliasName: string | null;
  allowSplitOrders: boolean;
  isRedditor: boolean;
  allowCombineOrder: boolean;
  requiredAuthorized: boolean;
}
// -------------------- TAG PRODUCTS DATALIST INTERFACE --------------------
export interface dataList {
  searchProducts: productDetails[];
  mints: mintCategory[];
  itemWeights: weightCategory[];
  yearReleased: yearReleasedCategory[];
  serieslist: seriesCategory[];
  misc: miscCategory[];
  tags: productTagsCategory[];
  seoMetaData: seoMetaData;
  seoContent: seoContent;
}
// -------------------- USER REVIEWS INTERFACE --------------------
export interface userReviews {
  commentBy: string | null;
  comments: string | null;
  createTs: string;
  customerName: string;
  id: number;
  productId: number;
  productImage: string;
  productName: string;
  productNameWithHypen: string;
  profilePhoto: string | null;
  rating: number;
  reviewHead: string;
  reviewText: string;
  userName: string | null;
}
// -------------------- BLOG,NEWS INTERFACE --------------------
export interface boldBlogs {
  actionUrl: string;
  code: string | null;
  createTS: string;
  description: string;
  id: number;
  image: string;
  isActive: boolean;
  metaDescription: string;
  metaKeywords: string;
  metaTitle: string;
  newsTitleWithHypen: string;
  newsType: number;
  newsTypeName: string | null;
  publishDate: string;
  publishby: string;
  title: string;
  type: string;
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
  userName: string | null;
  isVerified: boolean;
  comments: string | null;
  name: string | null;
}
export interface validateAddress {
  addressId: number;
  addressType: string;
  city: string;
  country: number;
  countryCode: string;
  email: string;
  firstName: string;
  isGuest: boolean;
  lastName: string;
  latitude: number;
  longitude: number;
  orderNote: string | null;
  phoneNo: string;
  shippingName: string;
  shippingProfile: string | null;
  state: number;
  stateCode: string;
  stateName: string;
  streetAddress1: string;
  streetAddress2: string;
  zip: string;
}
export interface Saletax {
  id: number;
  stateName: string;
  stateCode: string;
  pageUrl: string;
  imageUrl: string;
}
export interface products {
  id: number;
  productId: number;
  sku: string;
  qtyOrdered: number;
  qtyDispatched: number;
  price: number;
  productName: string;
  productNameWithHypen: string;
  imagePath: string;
  salesTaxCode: string;
  taxStatus: string;
  stockSource: string;
  packageWeight: number;
  salesEventId: number;
  discount: number;
  isReplacementAlreadyRaised: boolean;
  isRefunded: boolean;
  refundQty: number;
  refundTS: null;
  profit: number;
  oririnalInvoice: null;
  isCelebroMerge: boolean;
  productTax: number;
  size: number;
}
export type Order = {
  id: number;
  allowCombineOrder: boolean;
  allowSplitOrders: boolean;
  amountCRFromCoupon: number;
  avalaraTransactionCode: string;
  billingAddress: {
    city: string;
    streetAddress1: string;
    streetAddress2: string;
    stateCode: string;
    zip: string;
    countryCode: string;
  };
  cancellationCharges: number;
  carriercode: number;
  cityTax: number;
  coupon: string;
  couponType: null;
  creditCardCharges: number;
  creditCardHoldAmount: number;
  currentStatus: string;
  customerId: number;
  customerNote: string;
  customerOrderEligibilityForReplacement: boolean;
  customerStatus: string;
  emailId: string;
  expectedShipByDate: Date;
  expectedShipmentDate: Date;
  expeditedShippingCharges: number;
  firstName: string;
  giftWrapCharges: number;
  goldSpot: number;
  grantECheck: boolean;
  holdAmountDecision: string;
  imagePath: string;
  instockExpectedShipmentDateRange: Date;
  internalNote: string;
  invoice: string;
  invoicePath: string;
  isCelebroMerge: boolean;
  isCompleteRefund: boolean;
  isCustomerSupport: boolean;
  isExpeditedShipping: boolean;
  isGiftWrap: boolean;
  isMerged: boolean;
  isRedditor: boolean;
  isRefunded: boolean;
  isReplacementAllowed: boolean;
  isSplit: boolean;
  isVip: boolean;
  isYoutuber: boolean;
  lastName: string;
  mergedInvoices: string;
  mergedOrderNote: string;
  mobNo: string;
  orderConfidence: number;
  orderDate: Date;
  orderLabel: string;
  orderNote: string;
  otherCharges: number;
  palladiumSpot: number;
  paperWireExpectedShipmentDate: Date;
  paymentClearDate: Date;
  paymentStatus: string;
  platinumSpot: number;
  products: products[];
  reason: string;
  refundAmount: number;
  serviceCode: number;
  shipStationOrderId: number;
  shippingAddress: {
    shippingAddressId?: number;
    state?: string;
    countryId?: number;
    stateId?: number;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    stateCode: string;
    zip: number;
    countryCode: string;
    accountNumber?: string;
    depositoryName?: string;
  };
  shippingCharges: number;
  shippingEmailId: string;
  shippingName: string;
  shippingType: string;
  signatureConfirmationApplied: boolean;
  signatureConfirmationCharges: number;
  silverSpot: number;
  specialTaxes: number;
  standardShippingCharges: number;
  stateTax: number;
  subtotal: number;
  tagId: number;
  tax: number;
  tierCode: string;
  totalCost: number;
  totalDiscount: number;
  trackingNo: number;
  transactionType: string;
  upgradeShipmentModeCharges: number;
};
export type NoticeData = {
  actionUrl: null;
  description: string;
  imageURL: string;
  noticeTitle: string;
};
export interface actionsInterface {
  id: number;
  dashboardImageId: number;
  buttonText: string;
  searchBy: string;
  action: string;
  metalId: number;
  mintId: number;
  seriesId: number;
  tagId: string;
  productTypeId: number;
  gradeId: number;
  miscId: number;
  productId: number;
  productName: string;
  productNameWithHypen: string;
  url: string;
}
export interface dashboardImagesInterface {
  id: number;
  label1: string;
  label2: string;
  label3: string;
  appImageUrl: string;
  webImageUrl: string;
  appBackgroundImage: string;
  webBackgroundImage: string;
  tagLine: string;
  isActive: true;
  createTS: string;
  imageLocationOnUI: string;
  actions: actionsInterface[];
  audience: string;
  imageType: string;
  position: number;
  productId: string;
}

export interface TrackOrdertypes {
  carrierCode: null;
  trackingNo: null;
  invoice: string;
  orderDate: string;
  currentStatus: string;
  anticipatedShipmentDate: string;
  packageCode: null;
  serviceCode: null;
}
export type InventoryType = "In Stock" | "Preorder" | "Presale";

export type stateType = "Domestic" | "Military" | "Territories";

export interface shippedProductsInterface {
  orderShipmentId: number;
  orderId: number;
  shipStationOrderId: number;
  productId: number;
  productName: number;
  productImage: number;
  qty: number;
  price: number;
  sku: string;
  totalPrice: number;
  currentStatus: string;
}

export interface MergedOrder {
  orderId: number;
  shipStationOrderId: number;
  splitDate: string;
  invoice: null;
  shippedProducts: shippedProductsInterface[];
}

export interface SplitProductsInterface {
  orderShipmentId: number;
  orderId: number;
  shipStationOrderId: number;
  productId: number;
  productName: string;
  productImage: string;
  qty: number;
  price: number;
  sku: string;
  totalPrice: number;
  currentStatus: string;
}

export interface SplitOrder {
  orderShipmentId: number;
  orderId: number;
  shipStationOrderId: number;
  currentStatus: string;
  otherCharges: number;
  shipment: string;
  shippedProducts: SplitProductsInterface[];
}

export interface ReplaceProductInterface {
  currentStatusId: number;
  image1Path: string;
  image2Path: string;
  image3Path: string;
  orderId: number;
  productId: number;
  qty: number;
  reason: string;
  requestRaisedBy: number;
  requestRaisedIn: string;
  requestType: string;
}

export interface RequestsForReplacementNRefundsInterface {
  id: number;
  customerName: string;
  invoice: string;
  requestType: string;
  orderId: number;
  productId: number;
  productName: string;
  qty: string;
  reason: string;
  image1Path: string;
  image2Path: string;
  image3Path: string;
  currentStatus: string;
  statusChangedByUserId: number;
  approvalOrDenialComments: null;
  shipStationLabelPath: null;
  statusChangeTS: string;
  createTS: string;
  currentStatusCode: string;
  maxReplacementDate: null;
}

export interface CustomerRequestReplace {
  requestNumber: number;
  requestType: string;
  customerOrderId: number;
  productId: number;
  qtyReplaced: number;
  reason: string;
  image1Path: string;
  image2Path: string;
  image3Path: string;
  productName: string;
  invoice: string;
  customerName: string;
  currentStatusId: number;
  requestStatusCode: string;
  requestStatusText: string;
  qtyOrdered: number;
  amount: number;
  approvalOrDenialComments: null;
  customerSupportComments: null;
  transactionId: null;
  refundDate: null;
  approvedByUserId: 0;
  createTS: string;
  maxReplacementDate: null;
  custReturnReplaceStatus: [
    {
      oldStatus: string;
      newStatus: string;
      statusChangedBy: string;
      createTS: string;
      comments: string;
    }
  ];
}
export interface CustomerPrediction {
  customerId: number | null;
  dateNTime: string;
  goldOptimalPrediction: number|null;
  silverOptimalPrediction: number|null;
  goldWorstPrediction: number|null;
  silverWorstPrediction: number|null;
}
export interface ExecuteTransaction {
  customerId: number;
  productId: number;
  transactionDate: string | null;
  transactionQuantity: number | null;
  productUnitPrice: number;
  transactionType: string;
  goldSpot: number | null;
  silverSpot: number | null;
  source: string;
  metal: string;
  ouncesPerUnit: number;
  productName: string;
  sourceName: string;
}
export interface CustomerFeedbacks {
  customerId: number;
  feedBackText: string;
  feedBackType: string;
}
export interface AddPortfolioViews {
  customerId: number;
  viewedFrom: string;
  isMobile: boolean;
}
export interface RemovePortfolioProducts {
  customerId: number;
  productId: number;
}

export interface Portfoliointerface {
  success: boolean
  data: Data
}
export interface Data {
  metalInounces: metalInounces[];
  productsForPortfolio: ProductsForPortfolio[];
  investment: Investment[];
  portfolioSettings: PortfolioSettings[];
  metalCandleChart: MetalCandleChart[];
}
export interface ProductLifeinterface {
  metalInounces: metalInounces[]
  productsForPortfolio: ProductsForPortfolio[]
  investment: Investment[]
  transactions: Transaction[]
}

export interface Transaction {
  customerId: number
  productid: number
  transactionType: string
  transactionQuantity: number
  beforeQuantity: number
  afterQuantity: number
  transactionPrice: number
  transactionDate: string
  totalPrice:number
}
export interface metalInounces {
  orderDate: string;
  totalGoldOunces: number;
  totalSilverOunces: number;
  totalOunces: number;
  type: string;
  totalGoldOptimalPrediction: number;
  totalGoldWorstPrediction: number;
  totalSilverOptimalPrediction: number;
  totalSilverWorstPrediction: number;
}

export interface ProductsForPortfolio {
  productId: number;
  productImage: string;
  assetList: string;
  weight: number;
  isactive: boolean;
  metal: string;
  totalQtyOrdered: number;
  orderDate: string;
  actualPrice: number;
  pastMetalValue: number;
  currentMetalValue: number;
  isBold: boolean;
  previousOrderDate: string;
  sourceName: string;
  productNameWithHypen: string;
}

export interface Investment {
  customerId: number;
  dayChangePercentage:number
  totalGoldInvested: number;
  dayGold: number;
  daySilver: number;
  totalSilverInvested: number;
  totalGoldCurrent: number;
  totalSilverCurrent: number;
  totalSilverOunces: number;
  totalGoldOunces: number;
}
export interface PortfolioSettings {
  customerId: number;
  showActualPrice: boolean;
  showMetalPrice: boolean;
  showPrediction: boolean;
  showVdo: boolean;
  doNotShowAgain: boolean;
  showGoldPrediction: boolean;
  showSilverPrediction: boolean;
  showTotalPrediction: boolean;
}
export interface MetalCandleChart {
  closeGold: number;
  closeSilver: number;
  highGold: number;
  highSilver: number;
  intervalStart: string;
  lowGold: number;
  lowSilver: number;
  openGold: number;
  openSilver: number;
}

export interface TaxReportData {
  customerinfo: Customerinfo[]
  productsForPortfolio: ProductsForPortfolio[]
  transactions: TaxTransaction[]
  capitalGL: CapitalGl[]
  error: string | null;
}

export interface TaxTransaction {
  customerId: number
    productid: number
    transactionType: string
    transactionQuantity: number
    beforeQuantity: number
    afterQuantity: number
    transactionPrice: number
    totalPrice:number
    transactionDate: string
    productName: string
  }
export interface Customerinfo {
  firstName: string
  lastName: string
  streetAddress1: string
  city: string
  zip: string
  startDate:string
  endDate:string
  reportGenerationDate:string
}

export interface CapitalGl {
  productName: string
  dateAcquired: string
  dateSold: string
  costBasis: number
  proceeds: number
  type: string
}

export interface JewelryCouponCode {
  couponCode: string;
  expiryDate: string;
  percentage: number;
  couponTitle: string;
  couponHeader: string;
  termAndConditions: string;
  imageUrl: string;
  isActive: boolean;
}

export interface CartJewelryCouponCode {
  couponCode: string;
  expiryDate: string;
  percentage: number;
  discountType: any;
  couponTitle: string;
  couponHeader: string;
  termAndConditions: string;
  imageUrl: string;
  isActive: boolean;
}

export interface WisconsinExemptionRequest {
  businessName: string;
  businessType: string;
  businessAddress: string;
  businessCity: string;
  businessState: string;
  businessZIPCode: string;
  taxIDNumber: string;
  taxStateOfIssue: string;
  fein: string;
  driversLicenseNumber: string;
  licenseStateOfIssue: string;
  sellerName: string;
  sellerAddress: string;
  sellerCity: string;
  sellerState: string;
  sellerZIPCode: string;
  resaleCertificate: boolean;
  permitNumber: string;
  thirdPartyProvider: boolean;
  materialTangibles: boolean;
  machinery: boolean;
  repairMaterials: boolean;
  materialPercent1: number; // Use a decimal or float for percentages
  materialPercent2: number; // Use a decimal or float for percentages
  materialConsumption: boolean;
  materialPercent3: number; // Use a decimal or float for percentages
  materialPortion: boolean;
  farmTractors: boolean;
  farmFeed: boolean;
  farmBreed: boolean;
  farmContainers: boolean;
  farmAnimalWaste: boolean;
  farmAnimalByproducts: boolean;
  cesNumber: string;
  manufacturerType: boolean;
  tribeAffiliation: boolean;
  tribeState: boolean;
  wisconsinCounty: boolean;
  publicWisconsin: boolean;
  countyAffiliation: boolean;
  otherTrailers: string;
  sewerAffiliation: boolean;
  otherContainers: boolean;
  otherItems: boolean;
  electricExemptionCheck: boolean;
  fuelExemption: number; // Use a decimal or float for percentages
  electricExemption: number; // Use a decimal or float for percentages
  otherTangiblesService: boolean;
  otherTangiblesService1: string;
  otherTangiblesService2: string;
  otherTangibles3: boolean;
  otherPortion: boolean;
  otherPortion1: number; // Use a decimal or float for percentages
  otherElectric: boolean;
  residentialUse: boolean;
  residentialUse1: number; // Use a decimal or float for percentages
  residentialUse2: number; // Use a decimal or float for percentages
  residentialUse3: number; // Use a decimal or float for percentages
  farmUse: boolean;
  farmUse1: number; // Use a decimal or float for percentages
  farmUse2: number; // Use a decimal or float for percentages
  farmUse3: number; // Use a decimal or float for percentages
  farmAddress: string;
  farmUsePercent: number; // Use a decimal or float for percentages
  otherTextDescription: string;
  categoryEnvironment: boolean;
  commodityService: boolean;
  propertyDescription: boolean;
  otherPurchasesExempt: boolean;
  otherDescription: boolean;
  additionalOtherText: string;
  purchaserNameType: string;
  title: string;
  date1: Date; // ISO 8601 date string (e.g., "2024-11-12")
  signatureOfPurchaser: string; // Base64 string for signature or image URL
  emailId?: string; // Optional: EmailId, if available
  formStatus?: string;
}

export interface CustomerPreferences {
  id: number;
  boldUserName: string;
  customerId: number;
  customerType: string;
  metalPreference: string;
  profilePhoto: string;
  preferenceProductTypeId: string;
  preferenceMintType: string;
  preferenceMints: string;
  preferenceJewelryNCoupon: boolean | null;
  isPreferenceUpdated: boolean;
  updateCustomerProfileform: string;
}

export interface PreferenceCategory {
  categoryName: string;
  categoryURL: string;
  categoryImageURL: string;
}


export interface IRAQuestionnaire {
  iraInvestmentId: number,
  customerId: number,
  fullName: string;
  age: number | null;
  emailId: string;
  phone: string;
  isIRAKnowledge: boolean | null;
  annualContribution: any;
  customContribution?: number,
  isEmployed: boolean | null;
  investmentPreferences: string;
  goldAllocation?: string;
  silverAllocation?: string;
}
