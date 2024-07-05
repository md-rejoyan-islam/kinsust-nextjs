import { ecSlice } from "./ecSlice";

const ecApi = ecSlice.injectEndpoints({
  endpoints: (builder) => ({
    allEc: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
    getEcById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAllEcQuery, useGetEcByIdQuery } = ecApi;
