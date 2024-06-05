import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Inputs } from "../../types/Inputs";

interface rentedSlice {
  rentedCarInfo: Inputs;
}

export const initialState: rentedSlice = {
  rentedCarInfo: {
    name: "",
    number: 0,
    address: "",
    city: "",
    holder: "",
    cardNumber: 0,
    exDate: 0,
    cvc: 0,
    payMethod: "",
    pickUp: "",
    dropOff: "",
    pickTime: "",
    dropTime: "",
    pickDate: "",
    dropDate: "",
  },
};

export const rentedCarInfoSlice = createSlice({
  name: "rentedInfo",
  initialState,
  reducers: {
    saveRentedInfo: (state, action: PayloadAction<Inputs>) => {
      state.rentedCarInfo = action.payload;
    },
    updatePickDate: (state, action: PayloadAction<string>) => {
      state.rentedCarInfo.pickDate = action.payload;
    },
    updateDropDate: (state, action: PayloadAction<string>) => {
      state.rentedCarInfo.dropDate = action.payload;
    },
  },
});

export const { saveRentedInfo, updatePickDate, updateDropDate } =
  rentedCarInfoSlice.actions;
export const selectedCar = (state: RootState) => state.rentedInfo.rentedCarInfo;
export default rentedCarInfoSlice.reducer;
