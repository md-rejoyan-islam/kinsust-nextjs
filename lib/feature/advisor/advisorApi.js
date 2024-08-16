import { advisorSlice } from "./advisorSlice";

const advisorApi = advisorSlice.injectEndpoints({
  endpoints: (builder) => ({
    advisors: builder.query({
      query: () => ({
        url: `?sort=index`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAdvisorsQuery } = advisorApi;
