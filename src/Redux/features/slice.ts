import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store"; // store'dan doğru şekilde import edin

export interface openCategoryState {
  value: boolean;
  data: any[];
}

const initialState: openCategoryState = {
  value: false,
  data: [],
};

export const openCategorySlice = createSlice({
  name: "click",
  initialState,
  reducers: {
    openCategory: (state) => {
      state.value = !state.value;
    },
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

export const { openCategory, addData } = openCategorySlice.actions;
export const selectCount = (state: RootState) => state.click.value;
export const dataArray = (state: RootState) => state.click.data;

export default openCategorySlice.reducer;
