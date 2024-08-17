import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface CartSate {
  cart: any;
}

const initialState: CartSate = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let isPresent = state.cart.find((item: any) => {
        return item.id == action.payload.id;
      });
      if (isPresent) {
        state.cart = state.cart.map((item: any) => {
          return item.id == action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      // console.log("After:", JSON.parse(JSON.stringify(state.cart)));
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item: any) => {
        return item.id !== action.payload;
      });
    },

    IncrementQuantity: (state, action) => {
      state.cart = state.cart.map((item: any) => {
        return item.id == action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    },

    DecrementQuantity: (state, action) => {
      state.cart = state.cart.map((item: any) => {
        return item.id == action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    },
    ClearAllCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  ClearAllCart,
  removeFromCart,
  IncrementQuantity,
  DecrementQuantity,
} = cartSlice.actions;

export const getCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
