import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subscriberSlice = createApi({
  reducerPath: "subscriberApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.SERVER_URL}/api/v1/subscribers`,
    credentials: "include",
  }),
  tagTypes: ["Subscribers"],
  endpoints: () => ({}),
});
