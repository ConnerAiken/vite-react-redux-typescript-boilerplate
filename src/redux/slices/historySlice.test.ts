import HistorySlice, { initialState } from "./historySlice";
import { HistoryState } from "./historySlice.types"; 

describe("Business logic of history slice", async () => {
  it("We should be able to push a history item onto the state", async () => {
      const state: HistoryState = initialState;
      const historySliceInit = HistorySlice.reducer(state, { type: 'init' });
      expect(historySliceInit).toEqual(state); 
  });
  
    it("We should be able to add a new test", () => {
        const state: HistoryState = initialState;
        const testData = {
                timestamp: "2021-01-01T00:00:00.000Z"
        }

        const afterReducerOperation = HistorySlice.reducer(state, HistorySlice.actions.addHistory(testData));

        expect(afterReducerOperation[0].timestamp).toEqual(testData.timestamp); 
  });
});
