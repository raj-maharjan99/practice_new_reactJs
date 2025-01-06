import { baseUrl } from "@/constants/api-link";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (query) => ({
        url: "/users/login",
        method: "POST",
        body: query,
      }),
    }),
    userSignUp: builder.mutation({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useUserLoginMutation, useUserSignUpMutation } = authApi;
