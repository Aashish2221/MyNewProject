import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
const persistConfig = {
    key: "root",
    version: 1,
    storage
}
const reducer = combineReducers({ user: authReducer });
const customMiddleWare = getDefaultMiddleware({
    serializableCheck: false
})
const persistedReducer = persistReducer(persistConfig, reducer);

export const authStore = configureStore({
    reducer: persistedReducer,
    middleware: customMiddleWare
})