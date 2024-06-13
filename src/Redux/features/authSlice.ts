import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { firebaseType } from "../../types/firebaseLogin";

interface IauthSlice {
  email: string;
}

const initialState: IauthSlice = {
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<firebaseType>) => {
      state.email = action.payload.email;
    },
  },
});

export const { login } = authSlice.actions;
export const authInfo = (state: RootState) => state.auth.email;

export default authSlice.reducer;
