"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

interface AuthState {
  cart: Array<object>;
}

const initialState: AuthState = {
  cart: [],
};

export const Allslice = createSlice({
  name: "Allslice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<object>) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const {
  addToCart,
} = Allslice.actions;

export const selectAuth = (state: RootState) => state._persist;

export default Allslice.reducer;
