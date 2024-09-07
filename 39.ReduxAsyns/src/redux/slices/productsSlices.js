import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios("https://northwind.vercel.app/api/products/");
  return response.data;
});

const initialState = {
  products: [],
  error: "",
  loading: false,
  name: "fatma",
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;

export default productsSlice.reducer;
