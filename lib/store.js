import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { authSlice } from "./feature/auth/authSlice";
import { sliderSlice } from "./feature/slider/sliderSlice";
import { programSlice } from "./feature/program/programSlice";
import { postSlice } from "./feature/post/postSlice";
import { ecSlice } from "./feature/ec/ecSlice";
import { subscriberSlice } from "./feature/subscriber/subscriberSlice";
import { advisorSlice } from "./feature/advisor/advisorSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.reducerPath]: authSlice.reducer,
      [sliderSlice.reducerPath]: sliderSlice.reducer,
      [programSlice.reducerPath]: programSlice.reducer,
      [postSlice.reducerPath]: postSlice.reducer,
      [ecSlice.reducerPath]: ecSlice.reducer,
      [subscriberSlice.reducerPath]: subscriberSlice.reducer,
      [advisorSlice.reducerPath]: advisorSlice.reducer,
    },
    middleware: (gDM) =>
      gDM().concat(
        authSlice.middleware,
        sliderSlice.middleware,
        programSlice.middleware,
        postSlice.middleware,
        ecSlice.middleware,
        subscriberSlice.middleware,
        advisorSlice.middleware
      ),
    devTools: process.env.NODE_ENV !== "production",
  });

export const wrapper = createWrapper(makeStore, { debug: true });
