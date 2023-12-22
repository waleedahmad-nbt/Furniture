"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

interface OrderItem {
  Itemname: string;
  Price: number;
  Quantity: number;
}

interface AuthState {
  cart: Array<object>;
  wishList: Array<object>;
  user: Object;
  category: string;
  categoryId: string;
  recentViews: Array<object>;


  Authcheck: boolean;
  Wishlists: object[]; // You can specify a more specific type here if needed
  CurrentCart: string;
  currentTab: string;
  siebarcheck: boolean;
  Mobilesides: boolean;
  AdminSide: boolean;
  orderItems: OrderItem[];
}

const initialState: AuthState = {
  cart: [],
  wishList: [],
  user: {},
  category: "",
  categoryId:"",
  recentViews: [],

  
  orderItems: [],
  Authcheck: false,
  Wishlists: [],
  CurrentCart: "",
  currentTab: "Home",
  siebarcheck: false,
  Mobilesides: false,
  AdminSide: false
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
    incrementQuantity:(state,action: PayloadAction<object>)=>{
      // console.log(action.payload);
      const idToIncrement = action.payload;

      // Find the index of the item with the specified ID in the cart
      const index = state.cart.findIndex((item: any) => item._id === idToIncrement);
 
      if (index !== -1) {
        // Use type casting to treat the item as having a 'quantity' property
        (state.cart[index] as any).quantity += 1;
      }

    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const idToDecrement = action.payload;
      const index = state.cart.findIndex((item: any) => item._id === idToDecrement);
    
      // If the item is found and the quantity is greater than 1, decrement it
      if (index !== -1 && (state.cart[index] as any).quantity > 1) {
        (state.cart[index] as any).quantity -= 1;
      }
    },
    addToWhislist: (state, action: PayloadAction<object>) => {
      state.wishList = [...state.wishList, action.payload];
    },
    removeWishList: (state, action: PayloadAction<{ id: string }>) => {
      const idToRemove = action.payload.id;
      state.wishList = state.wishList.filter((item: any) => item._id !== idToRemove);
    },
    setLoginUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    changeUserName: (state, action: PayloadAction<object>) => {
      // Update state.user with new values
      state.user = {
        ...state.user,
        ...action.payload
      };
      console.log(state.user);
      
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setCategoryId: (state, action: PayloadAction<string>) => {
      state.categoryId =   action.payload;
    },
    setRecentViews: (state, action: PayloadAction<object>) => {
      state.recentViews =   [ ...state.recentViews, action.payload];
    },
    setUpdateRecentViews: (state, action: PayloadAction<{ id: any; updatedTime: any }>) => {
      const { id, updatedTime } = action.payload;
      
      // Use map to create a new array with the updated item
      state.recentViews = state.recentViews.map((item: any) =>
        item._id === id ? { ...item, time: updatedTime } : item
      );
    },    



    AssignsideTrue: (state) => {
      state.siebarcheck = true;
    },
    Assignsidefalse: (state) => {
      state.siebarcheck = false;
    },
    AssignAuthTrue: (state) => {
      state.Authcheck = true;
    },
    AssignAuthFalse: (state) => {
      state.Authcheck = false;
    },
    Assigncurrrent: (state, action: PayloadAction<string>) => {
      state.currentTab = action.payload;
    },
    addCustomItem: (state, action: PayloadAction<OrderItem>) => {
      state.orderItems.push(action.payload);
    },
    deleteCustomItem: (state, action: PayloadAction<number>) => {
      state.orderItems.splice(action.payload, 1);
    },
    AssignMobilesideTrue: (state) => {
      state.Mobilesides = true;
    },
    AssignMobilesidefalse: (state) => {
      state.Mobilesides = false;
    },

    AssignAdminsideTrue: (state) => {
      state.AdminSide = true;
    },
    AssignAdminsidefalse: (state) => {
      state.AdminSide = false;
    },
  },
});

export const selectAuth = (state: RootState) => state._persist;

export const { 
  addToCart, 
  removeCartItem,
  incrementQuantity,
  decrementQuantity,
  addToWhislist,
  removeWishList,
  setLoginUser,
  changeUserName,
  setCategory,
  setCategoryId,
  setRecentViews,
  setUpdateRecentViews,

  AssignAuthTrue,
  AssignAuthFalse,
  Assigncurrrent,
  addCustomItem,
  deleteCustomItem,
  AssignsideTrue,
  Assignsidefalse,
  AssignMobilesideTrue,
  AssignMobilesidefalse,
  AssignAdminsideTrue,
  AssignAdminsidefalse

} = Allslice.actions;

export default Allslice.reducer;