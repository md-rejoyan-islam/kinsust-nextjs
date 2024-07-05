"use client";
import { postSlice } from "./postSlice";

const postApi = postSlice.injectEndpoints({
  endpoints: (builder) => ({
    posts: builder.query({
      query: (query) => ({
        url: `?sort=-date&${query ? query : ""}`,
        method: "GET",
      }),
    }),
    getPostBySlug: builder.query({
      query: (slug) => ({
        url: `/${slug}`,
        method: "GET",
      }),
      providesTags: ["Post"],
    }),
    commnetOnPost: builder.mutation({
      query: (data) => ({
        url: `/comment-on-post`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  usePostsQuery,
  useCommnetOnPostMutation,
  useGetPostBySlugQuery,
} = postApi;
