import { combineReducers } from "@reduxjs/toolkit";
import { blackjackApi } from "./services/example";
import historySlice from "./slices/historySlice"; 

const rootReducer = combineReducers({
  game: blackjackApi.reducer,
  history: historySlice.reducer 
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
