import { createSlice } from "@reduxjs/toolkit";

const initState = {
  num: 100,
};

const counterStore = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    up: (state, actions) => {
      console.log("update");
      console.log(actions.payload);
      state.num = state.num + actions.payload;
    },
    down: () => {
      console.log("down");
    },
  },
});

export default counterStore;
export const { up, down } = counterStore.actions;
