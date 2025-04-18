"use client";

import { PropsWithChildren, useRef } from "react";
import { Provider } from "react-redux";
import { createStore, AppStore } from "./store";

export default function StoreProvider({ children }: PropsWithChildren) {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = createStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
