import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { authSlice } from "./feature/auth/authSlice";
import { sliderSlice } from "./feature/slider/sliderSlice";
import { programSlice } from "./feature/program/programSlice";
import { postSlice } from "./feature/post/postSlice";
import { ecSlice } from "./feature/ec/ecSlice";
import { subscriberSlice } from "./feature/subscriber/subscriberSlice";
import { loggedInUserSlice } from "./feature/auth/authSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.reducerPath]: authSlice.reducer,
      [sliderSlice.reducerPath]: sliderSlice.reducer,
      [programSlice.reducerPath]: programSlice.reducer,
      [postSlice.reducerPath]: postSlice.reducer,
      [ecSlice.reducerPath]: ecSlice.reducer,
      [subscriberSlice.reducerPath]: subscriberSlice.reducer,
      loggedInUser: loggedInUserSlice.reducer,
    },
    middleware: (gDM) =>
      gDM().concat(
        authSlice.middleware,
        sliderSlice.middleware,
        programSlice.middleware,
        postSlice.middleware,
        ecSlice.middleware,
        subscriberSlice.middleware
      ),
    devTools: process.env.NODE_ENV !== "production",
  });

export const wrapper = createWrapper(makeStore, { debug: true });
