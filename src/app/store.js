import { authApi } from "@/auth/authApi";
import { gitHubApi } from "@/slices/gitHubApi";
import { userSlice } from "@/slices/userSlice";

import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [gitHubApi.reducerPath]: gitHubApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat([authApi.middleware, gitHubApi.middleware]),
});
