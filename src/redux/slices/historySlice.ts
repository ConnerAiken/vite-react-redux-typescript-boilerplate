import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { HistoryItem, HistoryState } from "./historySlice.types";

export const initialState = [] as HistoryState; ;

const slice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state: HistoryItem[], action: PayloadAction<HistoryItem>) => {
        state.push(action.payload);
    },
  },
});

export default slice;
