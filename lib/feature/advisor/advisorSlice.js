"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const advisorSlice = createApi({
  reducerPath: "advisorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.SERVER_URL}/api/v1/advisors`,
    credentials: "include",
  }),
  tagTypes: ["Advisors"],
  endpoints: () => ({}),
});
