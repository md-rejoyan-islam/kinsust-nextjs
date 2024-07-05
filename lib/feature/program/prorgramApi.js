import { programSlice } from "./programSlice";

const programApi = programSlice.injectEndpoints({
  endpoints: (builder) => ({
    programs: builder.query({
      query: (query) => ({
        url: `${query}&limit=12&sort=-start_date`,
        method: "GET",
      }),
    }),
  }),
});

export const { useProgramsQuery } = programApi;
