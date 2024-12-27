import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import todoReducer from "../slice/todoSlice";
import { productApi } from "../createApi/productApi";
import cartReducer from "../slice/cartSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
