import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store"; // store'dan doğru şekilde import edin

export interface openCategoryState {
  value: boolean;
}

const initialState: openCategoryState = {
  value: false,
};

export const openCategorySlice = createSlice({
  name: "openCategory",
  initialState,
  reducers: {
    openCategory: (state) => {
      state.value = !state.value;
    },
  },
});

export const { openCategory } = openCategorySlice.actions;
export const selectCount = (state: RootState) => state.openCategory.value;

export default openCategorySlice.reducer;
