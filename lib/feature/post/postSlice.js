"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postSlice = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.SERVER_URL}/api/v1/posts`,
    credentials: "include",
  }),
  tagTypes: ["Posts", "Post"],
  endpoints: () => ({}),
});
