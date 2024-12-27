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
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += product.price;
      } else {
        state.cartItems.push({
          ...product,
          quantity: 1,
          totalPrice: product.price,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += product.price;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
