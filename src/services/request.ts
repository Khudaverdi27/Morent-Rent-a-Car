import { apiResponse } from "./../types/apiResponse";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getByName: builder.query<apiResponse, string>({
      query: (name) => `/${name}`,
    }),
  }),
});

export const { useGetByNameQuery } = carApi;
