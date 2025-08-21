export interface customerOrderInterface {
  discount: number;
  price: number;
  productId: number;
  productImageUrl: string;
  productInventorySource: string;
  productName: string;
  qty: number;
  salesEventId: number;
}
export interface placeOrderQueryInterface {
  amountCRFromCoupon: number;
  authorizationTransactionId: string;
  cancellationCharges: number;
  City: string;
  confirmDuplicateOrder: boolean;
  CountryId: number;
  creditCardCharges: number;
  customerOrderRequest: customerOrderInterface[];
  customerRuleCode: string | null;
  expeditedShippingCharges: number;
  FirstName: string;
  giftWrapCharges: number;
  goldSpot: number;
  isCustomerSupport: boolean;
  isGiftWrap: boolean;
  LastName: string;
  orderConfidence: number;
  orderDate: string;
  orderNote: string;
  otherCharges: number;
  palladiumSpot: number;
  PhoneNo: string;
  platinumSpot: number;
  preventStoringPaymentInfo: boolean;
  coupon: string | null;
  screenSize: string;
  sessionID: string;
  timeZone: string;
  shippingAddressId: number;
  shippingCharges: number;
  shippingEmailId: string;
  shippingName: string;
  shippingType: string;
  signatureConfirmationApplied: boolean;
  signatureConfirmationCharges: number;
  silverSpot: number;
  standardShippingCharges: number;
  StateId: number;
  StateName: string;
  StreetAddress1: string;
  StreetAddress2: string;
  subTotal: number;
  tax: number;
  totalCost: number;
  totalSalesDiscount: number;
  TransactionType: string;
  upgradeShipmentModeCharges: number;
  Zip: string;
  isMobile: boolean;
  ListingUniqueCode?: string;
  customerLiabilityScore: number;
  requiredAvsPlus: boolean;
  requiredAvsPlusPlus:boolean;
}

export interface outOfProductStocks {
  productId: number;
  productName: string;
  flag: boolean;
  productInventorySource: string;
  saleEventId: number;
}

export interface placeCustomerOrderResponseInterface {
  customerOrderId: number;
  invoice: string;
  emailId: string;
  expectedShipmentDate: string;
  orderStatus: string;
  paymentClearDate: string | null;
  outOfProductStocks: outOfProductStocks[];
}

export interface surveyOptionsInterface {
  surveyAnswerId: number;
  optionText: string;
}

export interface surveyQuestionsInterface {
  surveyId: number;
  surveyQuestionId: number;
  questionText: string;
  surveyOptions: surveyOptionsInterface[];
}
