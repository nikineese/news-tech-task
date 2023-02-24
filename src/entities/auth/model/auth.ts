import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { userCredentials } from "./config";
import { User } from "./types";

export const initialState: {
  isAuth: boolean;
  user: User;
} = {
  isAuth: JSON.parse(localStorage.getItem("isAuth") || "false"),
  user: {},
};
export const authModel = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, { payload }: PayloadAction<User>) => {
      if (
        userCredentials.username === payload.username &&
        userCredentials.password === payload.password
      ) {
        state.isAuth = true;
        localStorage.setItem("isAuth", JSON.stringify(true));
      } else {
        state.isAuth = false;
        localStorage.setItem("isAuth", JSON.stringify(false));
      }
    },
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
  },
});

export const setAuthState = (data: User, dispatch: Dispatch) =>
  dispatch(authModel.actions.setAuth(data));
export const setUserState = (data: User, dispatch: Dispatch) =>
  dispatch(authModel.actions.setUser(data));

export const useGetUserState = () => useSelector((state: RootState) => state.auth.user);
export const useGetIsAuthState = () =>
  useSelector((state: RootState) => state.auth.isAuth);

export const authReducer = authModel.reducer;
