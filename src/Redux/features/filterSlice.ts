import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface filterSlice {
  data: any[];
}

const initialState: filterSlice = {
  data: [],
};

export const filteredByCategorySlice = createSlice({
  name: "filteredCategory",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<string | number>) => {
      const index = state.data.indexOf(action.payload);
      if (index === -1) {
        state.data.push(action.payload);
      } else {
        state.data.splice(index, 1);
      }
    },
  },
});

export const { addData } = filteredByCategorySlice.actions;

export const dataArray = (state: RootState) => state.filteredCategory.data;

export default filteredByCategorySlice.reducer;
