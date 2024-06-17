import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { firebaseType } from "../../types/firebaseLogin";

interface IauthSlice {
  email: string;
  displayName: string;
}

const initialState: IauthSlice = {
  email: "",
  displayName: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<firebaseType>) => {
      state.displayName = action.payload.displayName;
    },
  },
});

export const { login } = authSlice.actions;
export const authInfo = (state: RootState) => state.auth.displayName;

export default authSlice.reducer;
