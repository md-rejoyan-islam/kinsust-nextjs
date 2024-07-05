import { authSlice, setUser } from "./authSlice";

const authApi = authSlice.injectEndpoints({
  endpoints: (builder) => ({
    authRegister: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    loggedInUser: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["User"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          dispatch(setUser(res.data.data));
        } catch (error) {
          return { error: error?.error };
        }
      },
    }),
    authLogin: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          dispatch(setUser(res.data.data));
        } catch (error) {
          return { error: error?.error };
        }
      },
    }),
    authLogout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
        body: {},
      }),
      invalidatesTags: ["User"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          dispatch(setUser(null));
        } catch (error) {
          return { error: error?.error };
        }
      },
    }),

    sendActivationCode: builder.mutation({
      query: (data) => ({
        url: "auth/resend-active-code",
        method: "POST",
        body: data,
      }),
    }),
    accountActivation: builder.mutation({
      query: (data) => ({
        url: "/auth/activate",
        method: "POST",
        body: data,
      }),
    }),
    findAccount: builder.mutation({
      query: (data) => ({
        url: "auth/find-account",
        method: "POST",
        body: data,
      }),
    }),
    passwordResetCodeSend: builder.mutation({
      query: (data) => ({
        url: "/auth/password-reset-code",
        method: "POST",
        body: data,
      }),
    }),
    passwordReset: builder.mutation({
      query: (data) => ({
        url: "/auth/password-reset",
        method: "POST",
        body: data,
      }),
    }),
    updateUserData: builder.mutation({
      query: (data) => ({
        url: `/users/${data.id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    updateUserPhoto: builder.mutation({
      query: (data) => {
        const { userId } = Object.fromEntries(data);
        return {
          url: `/users/${userId}`,
          method: "PATCH",
          body: data,
        };
      },
    }),
    updateUserPassword: builder.mutation({
      query: (data) => ({
        url: "/users/password-update",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useAccountActivationMutation,
  useAuthLoginMutation,
  useAuthLogoutMutation,
  useAuthRegisterMutation,
  useFindAccountMutation,
  useLoggedInUserQuery,
  usePasswordResetMutation,
  usePasswordResetCodeSendMutation,
  useSendActivationCodeMutation,
  useUpdateUserDataMutation,
} = authApi;
