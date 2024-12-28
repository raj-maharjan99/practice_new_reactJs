import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getProductApi: builder.query({
      query: (a) => `products`,
    }),
    getCartDetails: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductApiQuery, useGetCartDetailsQuery } = productApi;
