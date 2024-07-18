// @ts-nocheck
import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux"; 
import HistorySlice from "../redux/slices/historySlice";
import { blackjackApi } from "../redux/services/example.ts";
 

export function renderWithRedux(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
        reducer: {
            history: HistorySlice.reducer,
            game: blackjackApi.reducer
        },
        middleware: (gDM) => gDM().concat(blackjackApi.middleware),
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
