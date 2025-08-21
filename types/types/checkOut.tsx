import { ProductSpotInterface } from "./product/productDescription";
import { lowestPrices } from "./product/productInfo";
import { StocksInterface } from "./types";

export interface State {
  id: number;
  name: string;
}

export interface Address {
  city: string;
  entries: string;
  secondary?: string;
  state: string;
  street: string;
  zipCode: string;
}

export interface userAddress {
  accountNumber: string | string | null;
  addressId: number;
  addressType: string;
  allowCombineOrder: boolean;
  allowSplitOrders: boolean;
  boldUserName: string | string | null;
  city: string;
  country: number;
  countryCode: string;
  countryName: string;
  customerType: string | string | null;
  depositoryName: string | string | null;
  echeckCreditLimit: number;
  emailId: string;
  favCoinRoundSeries: string | string | null;
  firstName: string;
  isActive: boolean;
  isCustomerSupport: boolean;
  isDefaultAddress: boolean;
  isSubscribed: boolean;
  isVerified: boolean;
  isWholeSaler: boolean;
  lastName: string;
  metalBarsInterest: string | string | null;
  metalPreference: string | string | null;
  mobNo: string;
  profilePhoto: string | string | null;
  shippingName: string;
  shippingProfile: string | string | null;
  state: number;
  stateName: string | string | null;
  stateType: string | string | null;
  statecode: string | string | null;
  streetAddress1: string;
  streetAddress2: string;
  tagline: string | string | null;
  zip: string;
}

export interface shippingInfoInterface {
  addressId: number;
  addressType: string;
  city: string;
  isActive?: boolean;
  country: number;
  countryCode: string;
  email: string;
  expeditedShippingCharges?: number;
  firstName: string;
  isGuest: boolean;
  lastName: string;
  latitude: number;
  longitude: number;
  isGiftWrap: boolean;
  orderNote: string;
  phoneNo: string;
  shippingName: string;
  shippingProfile?: string;
  state: number;
  stateCode: string;
  stateName: string;
  stateType: string;
  streetAddress1: string;
  streetAddress2: string;
  zip: string;
  isSignatureConfirmation: boolean;
  signatureConfirmationCharges: number;
  isShippingCharges: boolean;
  shippingCharges: number;
  shippingMethod: "standard" | "expedited" | "fedex";
  isbillingAddress: boolean;
  cartTotal: number;
  taxLimit: number;
}

export interface billingAddressInterface {
  addressId?: number;
  streetAddress1: string;
  streetAddress2: string;
  addressType?: string;
  country?: number;
  countryCode: number;
  countryName?: string;
  city: string;
  isActive?: boolean;
  emailId: string;
  firstName?: string;
  isGuest?: boolean;
  lastName?: string;
  latitude?: number;
  longitude?: number;
  isGiftWrap?: boolean;
  orderNote?: string;
  mobNo: string;
  shippingName?: string;
  shippingProfile?: string;
  state?: number;
  customerId?: number;
  statecode: string;
  stateName: string;
  stateType?: string;
  zip: string;
  isSignatureConfirmation?: boolean;
  signatureConfirmationCharges?: number;
  isShippingCharges?: boolean;
  shippingCharges?: number;
  shippingMethod?: string;
  isbillingAddress?: boolean;
  cartTotal?: number;
  taxLimit?: number;
  accountNumber?: string;
}

export interface stateList {
  code: string;
  countryId: number;
  id: number;
  isActive: boolean;
  name: string;
  stateType: string;
  taxLimit: number;
}

export interface countryList {
  code: string;
  entityType: string;
  id: number;
  imageUrl: string | string | null;
  isActive: boolean;
  name: string;
  parentKey: number;
}

export interface newUserCheckOut {
  emailId: string;
  firstName: string;
  isActive: boolean;
  lastName: string;
  mobNo?: string;
  password: string;
  screenSize?: string;
}

export interface loginCheckOut {
  emailId: string;
  password: string;
  screenSize?: string;
  token?: string;
  sessionId?: string;
}

export interface usAddressValidationInterface {
  data: boolean;
  errorMessage: string | string | null;
  latitude: number;
  longitude: number;
  success: boolean;
}

export interface customerLiabilityInterface {
  id: number;
  tierCode: string | string | null;
  paymentMethodCode: string | string | null;
  isPayPal: boolean;
  isCreditCard: boolean;
  isPaperCheck: boolean;
  isEcheck: boolean;
  isWire: boolean;
  applePay : boolean
  orderConfidence: number;
  isNewCustomer: boolean;
  requiredAuthorized: boolean;
  maxmindScore: number;
  pcDisableReason?: string | null;
  ecDisableReason?: string | null;
}


export interface AvilablePaymentOption {
  paymentType: string;
  requiredAuthorization: boolean;
  requiredAvsPlus: boolean;
  requiredAvsPlusPlus: boolean;
  maxMindScore: number;
}


export interface taxableStates {
  id: number;
  code: string;
  name: string;
  imageUrl: string | string | null;
  entityType: string;
  isActive: boolean;
  parentKey: number;
}

export interface authorisedShoppingCart {
  shoppingCartId: number;
  customerId: number;
  productId: number;
  sku: string;
  price: number;
  quantity: number;
  productInventorySource: string;
  productName: string;
  productNameWithHypen: string;
  imagePath: string;
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
  availableTierCount: number;
  metalId: number;
  metal: string;
  ounces: number;
  activeSalesEventId: number;
  discountType: string;
  qtyPlanned: number;
  qtySold: number;
  discount: number;
  salesEventName: string | string | null;
  salesExpiryDate: string;
  taxCode: string;
  taxStatus: string | string | null;
  priceType: number;
  fixedPrice: number;
  wholeSaleStock: number;
  allocateAgainstWholesale: number;
  wholeSaleUpdateTS: string | string | null;
  wholeSaleTertiaryStock: number;
  allocatedAgainstWholeSaleTertiaryStock: number;
  wholeSale4thWarehouseStock: number;
  allocatedAgainst4thWarehouseStock: number;
  wholeSalePremium: number;
  backOrderDiscountDivisor: number;
  wholesaleTier1: number;
  backOrderWholeSalePremium: number;
  wholeSaleImapairedStock: number;
  allocatedAgainstWholeSaleImpairedStock: number;
  wholesaleImpairedDiscount: number;
  wholesaleFixedPriceDiscount: number;
  isGrouped: boolean;
  isClearanceProduct: boolean;
  expectedShipmentDate: string | string | null;
  instockExpectedShipmentDateRange: string;
  isPreSale: boolean;
  childs: [];
  dummyInventoryReduction: number;
  tertiaryDummyInventoryReduction: number;
  isChild: boolean;
  parentProductId: number;
  backorderPlanQty: number;
  backorderSoldQty: number;
  isActive: boolean;
  status: string | string | null;
  selected: boolean;
  expectedShipByDate: "2024-01-12T00:00:00";
  asLowAs: lowestPrices[];
  stocks: StocksInterface[];
  spot: ProductSpotInterface;
  size:number;
}

export interface userShipMentInterface {
  addressId: number;
  streetAddress1: string;
  streetAddress2: string;
  addressType: string;
  country: number;
  countryCode: string;
  countryName: string;
  zip: string;
  state: number;
  statecode: string;
  city: string;
  boldUserName: string | string | null;
  tagline: string | string | null;
  customerType: string | string | null;
  metalPreference: string | string | null;
  metalBarsInterest: string | string | null;
  favCoinRoundSeries: string | string | null;
  lastName: string | string | null;
  firstName: string | string | null;
  mobNo: string | string | null;
  emailId: string | string | null;
  profilePhoto: string | string | null;
  stateName: string | string | null;
  isWholeSaler: boolean;
  isSubscribed: boolean;
  isActive: boolean;
  isDefaultAddress: boolean;
  isCustomerSupport: boolean;
  shippingName: string | string | null;
  echeckCreditLimit: number;
  allowSplitOrders: boolean;
  allowCombineOrder: boolean;
  accountNumber: string | string | null;
  depositoryName: string | string | null;
  shippingProfile: string;
  stateType: string | string | null;
  isVerified: boolean;
}
export interface avaTaxProductsInterface {
  sku: string | null;
  productName: string;
  taxCode: string;
  quantity: number;
  price: number;
}

export interface CalculateAvalaraTaxResponse {
  id: number;
  code: string;
  companyId: number;
  date: string;
  paymentDate: string;
  status: number;
  type: number;
  batchCode: string;
  currencyCode: string;
  customerUsageType: string;
  entityUseCode: string;
  customerVendorCode: string;
  customerCode: string;
  exemptNo: string;
  reconciled: boolean;
  locationCode: string;
  reportingLocationCode: string;
  purchaseOrderNo: string;
  referenceCode: string;
  salespersonCode: string;
  taxOverrideType: any;
  taxOverrideAmount: any;
  taxOverrideReason: any;
  totalAmount: number;
  totalExempt: number;
  totalDiscount: number;
  totalTax: number;
  totalTaxable: number;
  totalTaxCalculated: number;
  adjustmentReason: number;
  adjustmentDescription: any;
  locked: boolean;
  region: any;
  country: any;
  version: number;
  softwareVersion: any;
  originAddressId: any;
  destinationAddressId: any;
  exchangeRateEffectiveDate: string;
  exchangeRate: number;
  isSellerImporterOfRecord: any;
  description: any;
  email: any;
  businessIdentificationNo: any;
  modifiedDate: string;
  modifiedUserId: number;
  taxDate: string;
  lines: TaxLine[];
  addresses: Address[];
  locationTypes: any;
  // summary: Summary[]
  taxDetailsByTaxType: any;
  parameters: any;
  messages: any;
  invoiceMessages: any;
}

export interface TaxLine {
  id: number;
  transactionId: number;
  lineNumber: string;
  boundaryOverrideId: any;
  customerUsageType: string;
  entityUseCode: string;
  description: string;
  destinationAddressId: any;
  originAddressId: any;
  discountAmount: number;
  discountTypeId: any;
  exemptAmount: number;
  exemptCertId: number;
  certificateId: any;
  exemptNo: string;
  isItemTaxable: boolean;
  isSSTP: any;
  itemCode: string;
  lineAmount: number;
  quantity: number;
  ref1: string;
  ref2: string;
  reportingDate: string;
  revAccount: string;
  sourcing: number;
  tax: number;
  taxableAmount: number;
  taxCalculated: number;
  taxCode: string;
  taxCodeId: number;
  taxDate: string;
  taxEngine: any;
  taxOverrideType: any;
  businessIdentificationNo: any;
  taxOverrideAmount: any;
  taxOverrideReason: any;
  taxIncluded: boolean;
  // details: Detail[]
  nonPassthroughDetails: any[];
  lineLocationTypes: any;
  parameters: any;
  hsCode: string;
  costInsuranceFreight: number;
  vatCode: string;
  vatNumberTypeId: number;
}
export interface calculateAvalaraTaxQueryInterface {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  customerCode: string;
  expeditedShippingCharges: number;
  standardShippingCharges: number;
  signatureConfirmationCharges: number;
  upgradeShipmentModeCharges: number;
  products: avaTaxProductsInterface[];
}
export interface billingAddressQuery {
  accountNumber: string;
  addressId?: number;
  addressType: string;
  streetAddress1: string;
  streetAddress2: string;
  phone?: string;
  country: number;
  zip: string;
  state: number;
  countryCode?: string;
  city: string;
  stateName?: string;
  stateCode?: string;
  shippingName?: string;
  customerId?: number;
  shippingProfile?: string;
  orderNote?: string | null;
}
export interface accountInterface {
  user_id: string;
  username_md5: string;
}
export interface billing {
  first_name: string;
  last_name: string;
  company: string;
  address: string;
  address_2: string;
  city: string;
  region: string;
  country: string;
  postal: string;
  phone_number: string;
  phone_country_code: string;
}
export interface device {
  ip_address: string;
  user_agent: string;
  accept_language: string;
  session_id: string;
}
export interface order {
  amount: number;
  currency: string;
  discount_code: string;
  affiliate_id: string;
  subaffiliate_id: string;
  referrer_uri: string;
  avs_result: string;
  cvv_result: string;
  is_gift: boolean;
  has_gift_message: boolean;
}
export interface payment {
  processor: string;
}
export interface shipping {
  first_name: string;
  last_name: string;
  company: string;
  address: string;
  address_2: string;
  city: string;
  region: string;
  country: string;
  postal: string;
  phone_number: string;
  phone_country_code: string;
  delivery_speed: string;
}
export interface _event {
  transaction_id: string;
  shop_id: string;
  time: string;
  type: string;
}
export interface email {
  address: string;
  domain: string;
}
export interface authCustomerLiabilityQueryInterface {
  orderSubTotal: number;
  orderTotalPrice: number;
  device: device;
  _event: _event;
  account: accountInterface;
  email: email;
  billing: billing;
  shipping: shipping;
  payment: payment;
  order: order;
  maxProductPrice: number;
  productIds: string[];
}
export interface authShipmentAddress {
  addressId: number;
  streetAddress1: string;
  streetAddress2: string;
  addressType: string;
  country: number;
  countryCode: string;
  countryName: string;
  zip: string;
  state: number;
  statecode: string;
  city: string;
  boldUserName: string | null;
  tagline: string | null;
  customerType: string | null;
  metalPreference: string | null;
  metalBarsInterest: string | null;
  favCoinRoundSeries: string | null;
  lastName: string;
  firstName: string;
  mobNo: string;
  emailId: string;
  profilePhoto: string | null;
  stateName: string;
  isWholeSaler: boolean;
  isSubscribed: boolean;
  isActive: boolean;
  isDefaultAddress: boolean;
  isCustomerSupport: boolean;
  shippingName: string;
  echeckCreditLimit: number;
  allowSplitOrders: boolean;
  allowCombineOrder: boolean;
  accountNumber: string | null;
  depositoryName: string | null;
  shippingProfile: string;
  stateType: string | null;
  isVerified: boolean;
}
export interface shippingAddressInterface {
  accountNumber: string | null;
  addressId?: number;
  addressType?: string;
  city: string;
  country?: number;
  countryCode: string;
  firstName: string;
  lastName: string;
  state?: number;
  stateCode: string;
  stateName?: string;
  stateType?: string;
  shippingName?: string;
  streetAddress1: string;
  streetAddress2: string;
  zip: string;
  taxLimit?: number;
  shippingProfile?: string;
  customerId: number;
}

export interface signCardRequestInterface {
  paymentmethod: string;
  amount: number;
  firstname: string;
  surname: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressCity: string;
  addressState: string;
  addressCountry: string;
  addressPostalCode: string;
  cardType: string;
  cardNumber: string;
  cardExpiryDate: string;
  referenceNumber: string;
  paymentToken?: string | null;
}

export interface echeckFormQueryInterface {
  routingNumber: string;
  accountNumber: string;
  checkNumber: string;
  checkType: string;
  idType: number;
  idTypeLabel: string;
  idNumber: string;
  taxId: string;
  idState: string;
}

export interface signCardResponseInterface {
  payment_token: any;
  card_type: string;
  card_number: string;
  card_expiry_date: string;
  access_key: string;
  profile_id: string;
  transaction_uuid: string;
  signed_field_names: string;
  unsigned_field_names: string;
  signed_date_time: string;
  locale: string;
  transaction_type: string;
  reference_number: string;
  amount: string;
  currency: string;
  payment_method: string;
  bill_to_forename: string;
  bill_to_surname: string;
  bill_to_email: string;
  bill_to_phone: string;
  bill_to_address_line1: string;
  bill_to_address_city: string;
  bill_to_address_state: string;
  bill_to_address_country: string;
  bill_to_address_postal_code: string;
  signature: string;
  isMobileRequest: boolean;
}
export interface signEcheckRequestInterface {
  paymentMethod: string;
  amount: number;
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressCity: string;
  addressState: string;
  addressCountry: string;
  addressPostalCode: string;
  driverLicenseState: string;
  driverLicenseNumber: string;
  dateOfBirth: string;
  echeckAccountType: string;
  companyTaxId: string | null;
  echeckSecCode: string;
  echeckAccountNumber: string;
  echeckRoutingNumber: string;
  referenceNumber: string;
  checkNumber: string;
  // isMobileRequest: boolean;
  paymentToken?: string | null;
}
export interface signEcheckResponseInterface {
  payment_token: string;
  driver_license_state: string;
  driver_license_number: string;
  date_of_birth: string;
  echeck_account_type: string;
  company_tax_id: string;
  echeck_sec_code: string;
  echeck_account_number: string;
  echeck_routing_number: string;
  echeck_check_number: string;
  access_key: string;
  profile_id: string;
  transaction_uuid: string;
  signed_field_names: string;
  unsigned_field_names: string;
  signed_date_time: string;
  locale: string;
  transaction_type: string;
  reference_number: string;
  amount: string;
  currency: string;
  payment_method: string;
  bill_to_forename: string;
  bill_to_surname: string;
  bill_to_email: string;
  bill_to_phone: string;
  bill_to_address_line1: string;
  bill_to_address_city: string;
  bill_to_address_state: string;
  bill_to_address_country: string;
  bill_to_address_postal_code: string;
  signature: string;
  isMobileRequest: boolean;
}
export interface braintreeRequestInterfaceexport {
  price: number;
  paymentMethodNonce: string;
  customerOrderId: string;
  firstName: string;
  lastName: string;
  extendedAddress: string;
  streetAddress: string;
  locality: string;
  region: string;
  email: string;
  postalCode: string;
  countryCodeAlpha2: string;
  invoice: string;
  phone: string;
}
export interface checkoutPaypal {
  price: number;
  paymentMethodNonce: string;
  customerOrderId: string;
  firstName: string;
  lastName: string;
  extendedAddress: string;
  streetAddress: string;
  locality: string;
  region: string;
  email: string;
  postalCode: string;
  countryCodeAlpha2: string;
  invoice: string;
  phone: string;
}
export interface PaypalResPayload {
  nonce: string;
  details: PaypalBillingDetails;
  type: string;
}
export interface PaypalBillingDetails {
  email: string;
  firstName: string;
  lastName: string;
  payerId: string;
  countryCode: string;
  billingAddress: PaypalBillingAddress;
  shippingAddress: PaypalShippingAddress;
}
export interface PaypalBillingAddress {
  countryCode: string;
}
export interface PaypalShippingAddress {
  line1: string;
  city: string;
  countryCode: string;
  postalCode: string;
  state: string;
  phone: string;
  recipientName: string;
}
export interface shippingAuthResponseInterface {
  addressId: number;
  streetAddress1: string;
  streetAddress2: string;
  addressType: string;
  country: number;
  countryCode: string;
  countryName: string;
  zip: string;
  state: number;
  statecode: string;
  city: string;
  boldUserName: any;
  tagline: any;
  customerType: any;
  metalPreference: any;
  metalBarsInterest: any;
  favCoinRoundSeries: any;
  lastName: string;
  firstName: string;
  mobNo: string;
  emailId: string;
  profilePhoto: any;
  stateName: string;
  isWholeSaler: boolean;
  isSubscribed: boolean;
  isActive: boolean;
  isDefaultAddress: boolean;
  isCustomerSupport: boolean;
  shippingName: string;
  echeckCreditLimit: number;
  allowSplitOrders: boolean;
  allowCombineOrder: boolean;
  accountNumber: any;
  depositoryName: any;
  shippingProfile: string;
  stateType: any;
  isVerified: boolean;
  phone?: string;
  phoneNo?: string;
  orderNote?: string;
  id?: number;
}
export interface authAddressValidationInterface {
  addressId: number;
  streetAddress1: string;
  streetAddress2: string;
  addressType: string;
  country: number;
  countryCode: string;
  countryName: string;
  zip: string;
  state: number;
  statecode: string;
  city: string;
  boldUserName: any;
  tagline: any;
  customerType: any;
  metalPreference: any;
  metalBarsInterest: any;
  favCoinRoundSeries: any;
  lastName: string;
  firstName: string;
  mobNo: string;
  emailId: string;
  profilePhoto: any;
  stateName: string;
  isWholeSaler: boolean;
  isSubscribed: boolean;
  isActive: boolean;
  isDefaultAddress: boolean;
  isCustomerSupport: boolean;
  shippingName: string;
  echeckCreditLimit: number;
  allowSplitOrders: boolean;
  allowCombineOrder: boolean;
  accountNumber: any;
  depositoryName: any;
  shippingProfile: string;
  stateType: string;
  isVerified: boolean;
  phone: string;
  orderNote: any;
}
export interface ShippingInfoInterface {
  accountNumber?: any;
  addressId: number;
  addressType: string;
  allowCombineOrder?: boolean;
  allowSplitOrders?: boolean;
  boldUserName?: any;
  city: string;
  countryCode: string;
  countryName: string;
  country: number;
  customerType?: any;
  cartTotal?: number;
  depositoryName?: any;
  echeckCreditLimit?: number;
  emailId: string;
  firstName: string;
  favCoinRoundSeries?: any;
  isActive: boolean;
  isbillingAddress: boolean;
  isDefaultAddress?: boolean;
  isCustomerSupport?: boolean;
  isGiftWrap: boolean;
  isGuest: boolean;
  isSignatureConfirmation: boolean;
  hasUserCheckedSignature: boolean;
  isShippingCharges: boolean;
  isVerified?: boolean;
  isWholeSaler?: boolean;
  isSubscribed?: boolean;
  lastName: string;
  latitude?: number;
  longitude?: number;
  metalBarsInterest?: any;
  metalPreference?: any;
  mobNo: string;
  phone?: string;
  orderNote: string;
  profilePhoto?: any;
  shippingName: string;
  shippingProfile: string;
  shippingCharges?: number;
  shippingMethod: "standard" | "expedited" | "fedex";
  signatureConfirmationCharges: number;
  state: number;
  stateCode: string;
  stateName: string;
  stateType: any;
  streetAddress1: string;
  streetAddress2: string;
  tagline?: any;
  taxLimit: number;
  zip: string;
  token?: string;
  id: number;
}
export interface updateBillingAddressQuery {
  addressId: number;
  addressType: string;
  customerId: number;
  shippingName: string;
  shippingProfile: any;
  streetAddress1: string;
  streetAddress2: string;
  country: number;
  zip: string;
  state: number;
  city: string;
  stateCode: string;
  accountNumber: any;
  depositoryName: any;
  mobNo?: string;
  phone?: string;
}

export interface formInterface {
  addressId?: number;
  firstName: string;
  lastName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  state: number;
  stateCode: string;
  stateName: string;
  stateType: string;
  taxLimit: number;
  country: number;
  countryCode: string;
  countryName: string;
  zip: string;
  shippingProfile: string;
  accountNumber?: string;
  depositoryName?: string;
  mobNo?: string;
  phone?: string;
}

export interface customerMarketLoss {
  marketLossId: number;
  orderId: number;
  cancellationCharges: number;
  invoice: null;
  isActive: true;
  status: null;
  createTs: string;
}
export interface OneClickInterfce {
  id: number;
  customerId: number;
  paymentMethod: string;
  token: string;
  transactionId: string;
  maskNumber: string;
  createTs: string;
  updateTs: string;
}
export interface cardDetailInterface {
  cardNumber: string;
  expMonth: number;
  expYear: number;
  cvn: string;
}

export interface ProductAccessoriesInterface {
  srNo: number;
  accessoryId: number;
  name: string;
  shortName: string;
  productNameWithHypen: any;
  imagePath: string;
  currentStockInHand: number;
  fixedPrice: number;
}


export interface checkoutApplePay {
  price: number,
    paymentMethodNonce: string,
    customerOrderId: string,
    familyName: string,
    givenName: string,
    addressLines: string,
    administrativeArea: string,
    country: string,
    countryCode: string,
    locality: string,
    postalCode: string,
    phoneticFamilyName: string,
    invoice: string,
    phoneticGivenName: string,
    subAdministrativeArea: string,
    subLocality: string,
    deviceData: string
    phoneNumber : string
  }
  export interface ApplePayResPayload {
    nonce: string;
    details: ApplePayBillingDetails;
    type: string;
    deviceData :string
  }
  export interface ApplePayBillingDetails {
    familyName: string,
    givenName: string,
    payerId: string;
    countryCode: string;
    billingAddress: ApplePayBillingAddress;
    shippingAddress: ApplePayShippingAddress;
  }
  export interface ApplePayBillingAddress {
    countryCode: string;
  }
  export interface ApplePayShippingAddress {
    line1: string;
    city: string;
    countryName : string
    countryCode: string;
    postalCode: string;
    state: string;
    phone: string;
    recipientName: string;
  }

 export interface CustomerDetailswithSnap {
    id?: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    customerId: number;
    subtotal: number;
    shippingAmount: number;
    tax: number;
    total: number;
    shippingAddressId: number;
    billingAddressId: number;
    isGuestUser: boolean;
    accountNumber: number;
    storageDepository: boolean,
    shippingType: string;
    signatureConfimation: boolean,
    addGiftNote: string;
    minFraudScore: number;
    enabledPaymentOptions: string,
    productIds: string,
    marketLoss: number,
    coupon: boolean,
    oneClickPaymentOption: boolean,
    removeProduct: string,
  }