import { gitHubUrl } from "@/constants/api-link";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gitHubApi = createApi({
  reducerPath: "gitHubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: gitHubUrl,
  }),
  endpoints: (builder) => ({
    getGitHubUser: builder.query({
      query: (userName) => ({
        url: `/users/${userName}`,
      }),
    }),
  }),
});

export const { useGetGitHubUserQuery } = gitHubApi;
