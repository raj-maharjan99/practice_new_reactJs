import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, getProducts, getCartDetails } from "./api-link";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getProductApi: builder.query({
      query: () => getProducts(),
    }),
    getProductsDetails: builder.query({
      query: (id) => getCartDetails(id),
    }),
  }),
});

export const { useGetProductApiQuery, useGetProductsDetailsQuery } = productApi;
