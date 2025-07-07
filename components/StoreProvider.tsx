"use client";
import { store } from "@/redux/features/store/store";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { Provider } from "react-redux";

function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>;
    </SessionProvider>
  );
}

export default StoreProvider;
