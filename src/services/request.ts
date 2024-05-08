import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiResponseBanner, apiResponsePopulars } from "../types/apiResponse";

export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getByName: builder.query<apiResponseBanner, string>({
      query: (endPoint) => `/${endPoint}`,
    }),
    getByPopular: builder.query<apiResponsePopulars, string>({
      query: (endPoint) => `/${endPoint}`,
    }),
  }),
});

export const { useGetByNameQuery } = carApi;
