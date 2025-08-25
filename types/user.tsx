export interface registerUserInterface {
  id: number;
  firstName: string;
  lastName: string;
  mobNo: string;
  emailId: string;
  password: string;
  isActive: boolean;
  createdDate: string;
  lastLoginDate: string;
  profilePhoto: string;
  iswholeSaler: boolean;
  token: string;
  screenSize: string;
  sessionID: string;
  isGuest: boolean;
  isPasswordSetOnNewSystem: boolean;
  shippingAddressId: number;
  isBlackList: boolean;
  aliasName: null;
  allowSplitOrders: boolean;
  isRedditor: boolean;
  allowCombineOrder: boolean;
  requiredAuthorized: boolean;
}

export interface addressValidation {
  addressId: number;
  customerId: number;
  addressType: string;
  profilePhoto?: string;
  streetAddress1: string;
  streetAddress2: string;
  email?: string;
  phone?: string;
  country: number;
  zip: string;
  state: number;
  city: string;
  stateName?: string;
  stateCode?: string;
  shippingName: string;
  accountNumber: string | null;
  depositoryName?: string;
  shippingProfile?: string;
}

export interface checkoutAsGuestInterface {
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
  shippingProfile?: string;
  state: number;
  stateCode: string;
  stateName: string;
  streetAddress1: string;
  streetAddress2: string;
  zip: string;
}

export interface checkoutAsGuestResponseInterface {
  id: number;
  firstName: string | null;
  lastName: string | null;
  mobNo: string | null;
  emailId: string | null;
  password: null;
  isActive: boolean;
  createdDate: string | null;
  lastLoginDate: string | null;
  latitude: number;
  longitude: number;
  profilePhoto: string | null;
  iswholeSaler: boolean;
  token: string | null;
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

export interface customerDetailsInterface {
  accountNumber: string | null;
  addressId: number;
  addressType: string | null;
  allowCombineOrder: boolean;
  allowSplitOrders: boolean;
  boldUserName: string | null;
  city: string | null;
  country: number;
  countryCode: string | null;
  countryName: string | null;
  customerType: string | null;
  depositoryName: string | null;
  echeckCreditLimit: number;
  emailId: string | null;
  favCoinRoundSeries: string | null;
  firstName: string | null;
  isActive: boolean;
  isCustomerSupport: boolean;
  isDefaultAddress: boolean;
  isSubscribed: boolean;
  isVerified: boolean;
  isWholeSaler: boolean;
  lastName: string | null;
  metalBarsInterest: string | null;
  metalPreference: string | null;
  mobNo: string;
  profilePhoto: string;
  shippingName: string | null;
  shippingProfile: string | null;
  state: number;
  stateName: string | null;
  stateType: string | null;
  statecode: string | null;
  streetAddress1: string | null;
  streetAddress2: string | null;
  tagline: string | null;
  zip: string | null;
}

export interface userFeedbackInterface {
  firstName: string;
  lastName: string;
  emailID: string;
  phone: string;
  message: string;
  messageCategories: string;
}

export interface userInfoInterface {
  lastName: string;
  firstName: string;
  emailId: string;
  mobNo: string;
  phone?: string;
  city: string;
  pincode: string;
  state: string;
  profilePhoto: string;
  Address: string;
  token?:string;
}
