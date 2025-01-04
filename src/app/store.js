import { authApi } from "@/auth/authApi";
import { userSlice } from "@/slices/userSlice";

import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat([authApi.middleware]),
});
