import { cartInterface } from "@/types/cart";
import { customerLiabilityInterface, taxableStates } from "@/types/checkOut";
import { createSlice } from "@reduxjs/toolkit";
import { userInfoInterface } from "@/types/user";
import { Pnl, spotPrices } from "@/types/types";

export const authSlice = createSlice({
  name: "authState",
  initialState: {
    user: null,
    isLoggedIn: false,
    customerInfo: {} as userInfoInterface,
    isNoticedView: false,
    isEmailView: false,
    cart: [] as cartInterface[],
    paymentMode: "",
    shippingInfo: {},
    guestUserToken: "",
    taxableStates: [] as taxableStates[],
    shippingMethod: "",
    avalaraTax: NaN,
    avalaraTaxres: {},
    spotPriceTimer: 45,
    spotPrice: {
      timestamp: "",
      spotTime: "",
      platinumChangePercent: 0,
      goldAsk: 0,
      platinumChange: 0,
      silverAsk: 0,
      silverBid: 0,
      silverChangePercent: 0,
      goldBid: 0,
      platinumAsk: 0,
      goldChangePercent: 0,
      platinumBid: 0,
      goldChange: 0,
      palladiumBid: 0,
      palladiumChangePercent: 0,
      activeFeed: null,
      palladiumChange: 0,
      areStale: 0,
      silverChange: 0,
      palladiumAsk: 0,
      pnl: [] as Pnl[],
    } as spotPrices,
    marketLossCharges: 0,
    maxmindScore: 0,
    customerLiability: {} as customerLiabilityInterface,
    isTermsChecked: false,
    isVerified: false,
    sessionId: "",
    grandTotal: 0,
    echeckData: {},
    billingInfo: {},
    coupon: {},
    isSignatureConfirmation: false,
    isGiftWrap: false,
    orderNote: "",
    signatureConfirmationCharges: 0,
    standarShippingCharges: 0,
    priorityShippingCharges: 0,
    fedexShippingChanrges: 0,
    shipmentMethod: "standard",
    guestUserId: 0,
    guestToken: "",
    isOneClick: false,
    isCardAauthorizationrequired: false,
    isCardAuthorised: false,
    isGuestPageValidated: false,
    isPaymentPageValidated: false,
    isConfirmPageValidated: false,
    isPaypalConfirmed: false,
    isShippingConfirmed: false,
    isGuestPageSubmitted: false,
    isShippingToDepository: false,
    iscardConfirmed: false,
    currentStockSelected: "",
    authorizationTransactionId: "",
  },
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    guestUserId: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = false;
    },
    guestAuthToken: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = false;
    },
    signOut: (state) => {
      state.user = null;
      state.spotPrice.pnl = [];
      state.isLoggedIn = false;
      state.shippingInfo = {};
      state.customerInfo = {} as userInfoInterface;
      state.cart = [];
      state.coupon = {};
    },
    notice: (state, action) => {
      state.isNoticedView = action.payload;
    },
    emailVerify: (state, action) => {
      state.isEmailView = action.payload;
    },
    addToCart: (state, action) => {
      const check = state.cart.find(
        (product: cartInterface) =>
          product.productId === action.payload.productId &&
          product.activeSalesEventId === action.payload.activeSalesEventId &&
          product.productInventorySource.match(
            action.payload.productInventorySource
          ) &&
          product.size === action.payload.size
      );
      if (check) {
        if (check && check.isActive === false) {
          check.quantity = action.payload.quantity;
          check.totalPrice = check.price * action.payload.quantity;
          check.selected = false;
        } else {
          check.quantity += action.payload.quantity;
        }
        check.totalPrice = check.price * action.payload.quantity;
        check.isActive = action.payload.isActive;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    addProductToLoginCart: (state, action) => {
      const check = state.cart.find(
        (product: cartInterface) =>
          product.productId === action.payload.productId &&
          product.activeSalesEventId === action.payload.activeSalesEventId &&
          product.productInventorySource.match(
            action.payload.productInventorySource
          ) && //  &&((product.productType === "Jewelry" && product.size === action.payload.size) || (product.productType !== "Jewelry" === true))
          product.productType === "Jewelry" &&
          product.size === action.payload.size
      );
      if (check) {
        if (check && check.isActive === false) {
          check.quantity = action.payload.quantity;
          check.totalPrice = check.price * action.payload.quantity;
          check.selected = false;
        } else {
          check.quantity = action.payload.quantity;
        }
        check.totalPrice = check.price * action.payload.quantity;
        check.isActive = action.payload.isActive;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    overwriteCartQty: (state, action) => {
      const check = state.cart.find(
        (product: cartInterface) =>
          product.productId === action.payload.productId &&
          product.activeSalesEventId === action.payload.activeSalesEventId &&
          product.productInventorySource.match(
            action.payload.productInventorySource
          )
      );
      if (check) {
        if (check && check.isActive === false) {
          check.quantity = action.payload.quantity;
          check.totalPrice = check.price * action.payload.quantity;
        } else {
          check.quantity = action.payload.quantity;
        }
        check.totalPrice = check.price * action.payload.quantity;
        check.selected = true;
        check.isActive = action.payload.isActive;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    updatecartQty: (state, action) => {
      return { ...state, cart: action.payload.payload };
    },
    updateSelection: (state, action) => {
      return { ...state, cart: action.payload.payload };
    },
    deleteFromCart: (state, action) => {
      return { ...state, cart: action.payload.payload };
    },
    updateShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
    guestUserToken: (state, action) => {
      state.guestUserToken = action.payload;
    },
    updateShippingMethod: (state, action) => {
      state.shippingMethod = action.payload;
    },
    addPaymentMethod: (state, action) => {
      state.paymentMode = action.payload;
    },
    updateCustomerInfo: (state, action) => {
      state.customerInfo = action.payload;
    },
    getAvaTax: (state, action) => {
      state.avalaraTax = action.payload;
    },
    getAvaTaxRes: (state, action) => {
      state.avalaraTaxres = action.payload;
    },
    updateSpotPrices: (state, action) => {
      state.spotPrice = action.payload;
    },
    updateSpotPriceTimer(state, action) {
      state.spotPriceTimer = action.payload;
    },
    marketLossCharges: (state, action) => {
      state.marketLossCharges = action.payload;
    },
    maxmindScore: (state, action) => {
      state.maxmindScore = action.payload;
    },
    updateCustomerLiability: (state, action) => {
      state.customerLiability = action.payload;
    },
    emptyCart: (state) => {
      state.cart = state.cart.filter(
        (c: cartInterface) => c.selected === false
      );
    },
    overwriteCart: (state, action) => {
      state.cart = action.payload;
    },
    checkTerms: (state, action) => {
      state.isTermsChecked = action.payload;
    },
    setBillingAddress: (state, action) => {
      state.billingInfo = action.payload;
    },
    setSessionId: (state, action) => {
      state.sessionId = action.payload;
    },
    getgrandTotal: (state, action) => {
      state.grandTotal = action.payload;
    },
    resetCheckoutData: (state) => {
      state.shippingInfo = {};
      state.billingInfo = {};
      state.shippingMethod = "";
      state.paymentMode = "";
      state.avalaraTax = 0;
      state.user = null;
      state.isLoggedIn = false;
      state.customerInfo = {} as userInfoInterface;
      state.echeckData = {};
      state.marketLossCharges = 0;
      state.avalaraTaxres = {};
      state.authorizationTransactionId = "";
      state.coupon = {};
    },
    updateEcheckData: (state, action) => {
      state.echeckData = action.payload;
    },
    addCoupon: (state, action) => {
      state.coupon = action.payload;
    },
    deleteCoupon: (state) => {
      state.coupon = {};
    },
    checkIsGuestPageValidated: (state, action) => {
      state.isGuestPageValidated = action.payload;
    },
    checkPaymentPageValidation: (state, action) => {
      state.isPaymentPageValidated = action.payload;
    },
    checkConfirmPagePageValidation: (state, action) => {
      state.isConfirmPageValidated = action.payload;
    },
    resetShipping: (state, action) => {
      state.guestToken = action.payload?.token || "";
      state.shippingInfo = {};
      state.paymentMode = "";
      state.billingInfo = {};
      state.avalaraTax = 0;
      state.marketLossCharges = 0;
      state.echeckData = {};
      state.avalaraTaxres = {};
      state.authorizationTransactionId = "";
    },
    clearShipping: (state, action) => {
      state.guestToken = action.payload?.token || "";
      state.shippingInfo = {};
      state.paymentMode = "";
      state.billingInfo = {};
      (state.avalaraTax = 0),
        (state.customerLiability = {} as customerLiabilityInterface);
      state.isGuestPageValidated = false;
      state.isPaymentPageValidated = false;
      state.isConfirmPageValidated = false;
      state.marketLossCharges = 0;
      state.echeckData = {};
      state.avalaraTaxres = {};
      state.authorizationTransactionId = "";
    },
    clearGuestToken: (state) => {
      state.guestToken = "";
    },
    checkIsEmailVerified: (state, action) => {
      state.isVerified === action.payload;
    },
    updateIsOneClick: (state, action) => {
      state.isOneClick = action.payload;
    },
    validatePaymentPage: (state, action) => {
      state.isPaymentPageValidated = action.payload;
    },
    validateConfimrPage: (state, action) => {
      state.isConfirmPageValidated = action.payload;
    },
    checkIfAuthorizationIsRequired: (state, action) => {
      state.isCardAauthorizationrequired = action.payload;
    },
    checkIfcardIsAuthorised: (state, action) => {
      state.isCardAuthorised = action.payload;
    },
    checkPaypalIsConfirmed: (state, action) => {
      state.isPaypalConfirmed = action.payload;
    },
    checkIfShippingIsAuthorised: (state, action) => {
      state.isShippingConfirmed = action.payload;
    },
    updateSelectedStock: (state, action) => {
      state.currentStockSelected = action.payload;
    },
    authorizationTransactionId: (state, action) => {
      state.authorizationTransactionId = action.payload;
    },
    checkIfGuestPageIsSubmitted: (state, action) => {
      state.isGuestPageSubmitted = action.payload;
    },
    checkIfShippingToDepository: (state, action) => {
      state.isShippingToDepository = action.payload;
    },
    checkCardIsVerified: (state, action) => {
      state.iscardConfirmed = action.payload;
    },
  },
});

export const {
  signIn,
  signOut,
  guestAuthToken,
  guestUserId,
  notice,
  addToCart,
  addProductToLoginCart,
  updatecartQty,
  updateSelection,
  updateShippingInfo,
  guestUserToken,
  addPaymentMethod: addPaymentMethod,
  updateCustomerInfo,
  deleteFromCart,
  updateShippingMethod,
  getAvaTax,
  getAvaTaxRes,
  updateSpotPrices,
  updateSpotPriceTimer,
  marketLossCharges,
  maxmindScore,
  updateCustomerLiability,
  emptyCart,
  overwriteCart,
  checkTerms,
  setBillingAddress,
  setSessionId,
  getgrandTotal,
  resetCheckoutData,
  updateEcheckData,
  addCoupon,
  deleteCoupon,
  clearShipping,
  clearGuestToken,
  overwriteCartQty,
  resetShipping,
  checkIsEmailVerified,
  updateIsOneClick,
  validatePaymentPage,
  validateConfimrPage,
  checkIfAuthorizationIsRequired,
  checkIfcardIsAuthorised,
  checkPaymentPageValidation,
  checkConfirmPagePageValidation,
  checkPaypalIsConfirmed,
  checkIfShippingIsAuthorised,
  updateSelectedStock,
  authorizationTransactionId,
  checkIfGuestPageIsSubmitted,
  checkIfShippingToDepository,
  checkCardIsVerified,
} = authSlice.actions;
export const selectUser = (state: any) => state.user;
export default authSlice.reducer;
