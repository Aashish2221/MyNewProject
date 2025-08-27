import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['authState'], // Explicitly persist only authState
};

// Combine reducers with the correct key
const rootReducer = combineReducers({
  authState: authReducer, // Match the slice name in authSlice.tsx
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredActionPaths: ['err'], // Ignore error objects in persist actions
      },
    }),
});

// Export persistor for PersistGate
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
