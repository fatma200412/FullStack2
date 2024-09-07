import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  inputValue: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      // console.log(action.payload);
      // state.value += +action.payload;
      state.value += +state.inputValue;
    },
    decrementByAmount: (state, action) => {
      // console.log(action.payload);
      // state.value += +action.payload;
      state.value -= +state.inputValue;
    },
    getValue: (state, action) => {
      state.inputValue = action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  getValue,
  decrementByAmount,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
