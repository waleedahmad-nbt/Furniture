// use client
import { configureStore } from "@reduxjs/toolkit";
import { Allslice } from "./slices";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: [
    "cart", 
    "wishList",
    "user",
    "recentViews",
  ]
};

const persistedReducer = persistReducer(persistConfig, Allslice);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
