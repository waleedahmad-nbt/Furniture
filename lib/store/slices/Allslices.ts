"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

interface AuthState {
  cart: Array<object>;
  wishList: Array<object>;
}

const initialState: AuthState = {
  cart: [],
  wishList: []
};

export const Allslice = createSlice({
  name: "Allslice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<object>) => {
      state.cart = [...state.cart, action.payload];
    },
    removeCartItem: (state, action: PayloadAction<{ id: string }>) => {
      const idToRemove = action.payload.id;
      state.cart = state.cart.filter((item: any) => item._id !== idToRemove);
    },
    addToWhislist: (state, action: PayloadAction<object>) => {
      state.wishList = [...state.wishList, action.payload];
    },
    removeWishList: (state, action: PayloadAction<{ id: string }>) => {
      const idToRemove = action.payload.id;
      state.wishList = state.wishList.filter((item: any) => item._id !== idToRemove);
    },
  },
});

export const selectAuth = (state: RootState) => state._persist;

export const { 
  addToCart, 
  removeCartItem,
  addToWhislist,
  removeWishList,
} = Allslice.actions;

export default Allslice.reducer;