import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    bill: 0,
    tip: 0,
    btntip:0,
  },

  reducers: {
    submit: (state, action) => {
      state.bill = action.payload.bill;
      state.tip = action.payload.tip;
      state.btntip = action.payload.btntip;
    },
    reset:(state,action) => {
        state.bill = 0;
        state.tip = 0;
        state.btntip = 0;
    }
  },
});

export const {submit,reset} = userSlice.actions;
export default userSlice.reducer;