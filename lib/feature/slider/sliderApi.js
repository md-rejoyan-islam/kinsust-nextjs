const { sliderSlice } = require("./sliderSlice");

const sliderApi = sliderSlice.injectEndpoints({
  endpoints: (builder) => ({
    sliders: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});

export const { useSlidersQuery } = sliderApi;
