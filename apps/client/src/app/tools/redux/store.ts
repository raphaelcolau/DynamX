import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { tabSlice } from "./tabIndicator/tabSlice";

const store = () =>
  configureStore({
    reducer: {
      tab: tabSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<RootState>(store);