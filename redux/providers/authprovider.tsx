'use client'; // Mark as Client Component
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store/authStore';

interface ReduxWrapperProps {
  children: React.ReactNode;
}

export default function ReduxWrapper({ children }: ReduxWrapperProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}