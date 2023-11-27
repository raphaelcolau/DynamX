import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { HYDRATE } from "next-redux-wrapper";

export interface TabState {
  value: number;
}

const initialState: TabState = {
  value: 0,
};

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action,
      };
    });
  },

});

export const { changeTab } = tabSlice.actions;
export const selectTab = (state: any) => state.tab.value;
export default tabSlice.reducer;