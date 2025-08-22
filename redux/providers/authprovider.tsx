"use client";
import { Provider } from "react-redux";
import React from "react";
import { authStore } from "../store/authStore";
import { persistStore } from "redux-persist";
import { usePathname, } from "next/navigation";
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let persistor = persistStore(authStore);
  const isHomePage = usePathname() === "/";
  return (
    <Provider store={authStore}>
      {children}
    </Provider>
  );
}
