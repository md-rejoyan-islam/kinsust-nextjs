import { subscriberSlice } from "./subscriberSlice";

const subscriberApi = subscriberSlice.injectEndpoints({
  endpoints: (builder) => ({
    addSubsciber: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddSubsciberMutation } = subscriberApi;
