"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const programSlice = createApi({
  reducerPath: "programApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.SERVER_URL}/api/v1/programs`,
    credentials: "include",
  }),
  tagTypes: ["Programs"],
  endpoints: () => ({}),
});
