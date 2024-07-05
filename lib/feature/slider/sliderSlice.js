import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sliderSlice = createApi({
  reducerPath: "sliderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.SERVER_URL}/api/v1/sliders`,
    credentials: "include",
  }),
  tagTypes: ["Sliders"],
  endpoints: () => ({}),
});
