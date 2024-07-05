"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ecSlice = createApi({
  reducerPath: "ecApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.SERVER_URL}/api/v1/ec`,
    credentials: "include",
  }),
  tagTypes: ["ECS"],
  endpoints: () => ({}),
});
