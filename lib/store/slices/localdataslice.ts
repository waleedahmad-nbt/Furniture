// localDataSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

interface LocalDataState {
  cart: Array<object>;
  wishList: Array<object>;
}

const initialState: LocalDataState = {
  cart: [],
  wishList: []
};

const localDataSlice = createSlice({
  name: "localData",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<object>) => {
      state.cart = [...state.cart, action.payload];
    },
    addToWhislist: (state, action: PayloadAction<object>) => {
      state.wishList = [...state.wishList, action.payload];
    },
    removeCartItem: (state, action: PayloadAction<{ id: string }>) => {
      const idToRemove = action.payload.id;
      state.cart = state.cart.filter((item: any) => item._id !== idToRemove);
    },
  },
});

export const selectAuth = (state: RootState) => state._persist;

export const { 
  addToCart, 
  removeCartItem, 
  addToWhislist
} = localDataSlice.actions;

export default localDataSlice.reducer;