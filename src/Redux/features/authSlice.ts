import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginType } from "../../types/Inputs";
import { RootState } from "../store";

interface IauthSlice {
  authData: {
    email: string;
    password: string;
  };
}

const initialState: IauthSlice = {
  authData: {
    email: "",
    password: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginType>) => {
      state.authData.email = action.payload.email;
      state.authData.password = action.payload.password;
    },
  },
});

export const { login } = authSlice.actions;
export const authInfo = (state: RootState) => state.auth.authData;

export default authSlice.reducer;
