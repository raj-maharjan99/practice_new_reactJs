import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add to cart for product component
    addToCart: (state, action) => {
      const existItem = state.cartItems?.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existItem >= 0) {
        state.cartItems[existItem].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };

        state.cartItems.push(tempProduct);
      }
      state.totalQuantity = state.cartItems?.reduce(
        (acc, item) => acc + item.cartQuantity,
        0
      );
      state.totalPrice = state.cartItems?.reduce(
        (acc, item) => acc + item.cartQuantity * item.price,
        0
      );
    },
    // remove function

    removeFromCart: (state, action) => {
      // Filter out the item to be removed
      state.cartItems = state.cartItems?.filter(
        (item) => item.id !== action.payload
      );

      // Recalculate totalQuantity and totalPrice after removal
      state.totalQuantity = state.cartItems?.reduce(
        (acc, item) => acc + item.cartQuantity,
        0
      );
      state.totalPrice = state.cartItems?.reduce(
        (acc, item) => acc + item.cartQuantity * item.price,
        0
      );
    },
    // clear cart
    clearCartItem: (state, action) => {
      state.cartItems = [];
      // Recalculate totalQuantity and totalPrice after removal
      state.totalQuantity = state.cartItems?.reduce(
        (acc, item) => acc + item.cartQuantity,
        0
      );
      state.totalPrice = state.cartItems?.reduce(
        (acc, item) => acc + item.cartQuantity * item.price,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, clearCartItem } = cartSlice.actions;
export default cartSlice.reducer;
