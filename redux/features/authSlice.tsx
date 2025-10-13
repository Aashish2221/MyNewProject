import { Product } from '@/types/products';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the product type
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   description: string;
// }

// Define the cart item type
interface CartItem extends Product {
  quantity: number;
}

// Define the customer info interface with specific fields
interface CustomerInfo {
  lastName?: string;
  firstName?: string;
  emailId?: string;
  mobNo?: string;
  phone?: string;
  city?: string;
  pincode?: string;
  state?: string;
  profilePhoto?: string;
  address?: string;
}

// Define the user interface
interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  token: string;
}

// Define the auth state
interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  customerInfo: CustomerInfo;
  cart: CartItem[];
  guestUserToken: string;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  customerInfo: {
    lastName: '',
    firstName: '',
    emailId: '',
    mobNo: '',
    phone: '',
    city: '',
    pincode: '',
    state: '',
    profilePhoto: '',
    address: '',
  },
  cart: [],
  guestUserToken: '',
};

export const authSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    // Sign in with a typed user payload
    signIn: (state, action: PayloadAction<{ id: string; name: string; email: string; mobile: string; token: string; [key: string]: any }>) => {
      state.user = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        mobile: action.payload.mobile,
        token: action.payload.token,
      };
      state.isLoggedIn = true;
    },
    // Sign out resets all relevant state
    signOut: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.customerInfo = {
        lastName: '',
        firstName: '',
        emailId: '',
        mobNo: '',
        phone: '',
        city: '',
        pincode: '',
        state: '',
        profilePhoto: '',
        address: '',
      };
      state.cart = [];
    },
    // Set guest user token
    guestUserToken: (state, action: PayloadAction<string>) => {
      state.guestUserToken = action.payload;
      state.user = { id: action.payload, name: '', email: '', mobile: '', token: action.payload };
      state.isLoggedIn = false;
    },
    // Update customer info with specific fields
    updateCustomerInfo: (state, action: PayloadAction<CustomerInfo>) => {
      state.customerInfo = { ...state.customerInfo, ...action.payload };
    },
    // Reset checkout data
    resetCheckoutData: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.customerInfo = {
        lastName: '',
        firstName: '',
        emailId: '',
        mobNo: '',
        phone: '',
        city: '',
        pincode: '',
        state: '',
        profilePhoto: '',
        address: '',
      };
    },
    // Add to cart
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    // Update cart quantity
    updateCartQty: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      if (quantity < 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        state.cart = state.cart.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
      }
    },
    // Delete from cart
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    // Empty cart
    emptyCart: (state) => {
      state.cart = [];
    },
    // Overwrite cart
    overwriteCart: (state, action: PayloadAction<CartItem[]>) => {
      state.cart = [...action.payload];
    },
  },
});

export const {
  signIn,
  signOut,
  guestUserToken,
  updateCustomerInfo,
  resetCheckoutData,
  addToCart,
  updateCartQty,
  deleteFromCart,
  emptyCart,
  overwriteCart,
} = authSlice.actions;

// Selectors
export const selectUser = (state: { authState?: AuthState }) => state.authState;
export const selectIsLoggedIn = (state: { authState?: AuthState }) => state.authState?.isLoggedIn;
export const selectCustomerInfo = (state: { authState?: AuthState }) =>
  state.authState?.customerInfo || {};
export const selectCart = (state: { authState?: AuthState }) => state.authState?.cart;

export default authSlice.reducer;