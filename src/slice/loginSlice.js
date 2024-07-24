import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";

const initState = {
  email: "",
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
  return loginPost(param);
});

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initState,
  reducers: {
    login: (state, action) => {
      console.log("login...");
      console.log(action.payload);
      return { email: action.payload.email };
    },
    logout: () => {
      console.log("logout...");
      return { ...initState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, () => {
        console.log("fullfilled");
      })
      .addCase(loginPostAsync.pending, () => {
        console.log("pending");
      })
      .addCase(loginPostAsync.rejected, () => {
        console.log("reject");
      });
  },
});

export default loginSlice.reducer;
export const { login, logout } = loginSlice.actions;
