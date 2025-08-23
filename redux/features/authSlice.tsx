import { cartInterface } from "@/types/cart";
import { createSlice } from "@reduxjs/toolkit";
import { userInfoInterface } from "@/types/user";

export const authSlice = createSlice({
  name: "authState",
  initialState: {
    user: null,
    isLoggedIn: false,
    customerInfo: {} as userInfoInterface,
    cart: [] as cartInterface[],
    guestUserToken: "",
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
      state.isLoggedIn = false;
      state.customerInfo = {} as userInfoInterface;
      state.cart = [];
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
        state.cart = [];
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
        state.cart = [];
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
        state.cart = [];
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
    guestUserToken: (state, action) => {
      state.guestUserToken = action.payload;
    },
    updateCustomerInfo: (state, action) => {
      state.customerInfo = action.payload;
    },
    emptyCart: (state) => {
      state.cart = state.cart.filter(
        (c: cartInterface) => c.selected === false
      );
    },
    overwriteCart: (state, action) => {
      state.cart = action.payload;
    },
    resetCheckoutData: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.customerInfo = {} as userInfoInterface;
    },
  },
});

export const {
  signIn,
  signOut,
  guestAuthToken,
  guestUserId,
  addToCart,
  addProductToLoginCart,
  updatecartQty,
  updateSelection,
  guestUserToken,
  updateCustomerInfo,
  deleteFromCart,
  emptyCart,
  overwriteCart,
  resetCheckoutData,
  overwriteCartQty,
} = authSlice.actions;
export const selectUser = (state: any) => state.user;
export default authSlice.reducer;
