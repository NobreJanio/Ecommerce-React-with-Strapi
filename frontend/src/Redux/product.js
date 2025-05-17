import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Temporary mock data until API integration
const products = [];
const categories = [];

const initialState = {
  products: [],
  categories: [],
  status: 'idle',
  error: null
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state) => {
      state.products = products;
    },
    getCategories: (state) => {
      state.categories = categories;
    }
  }
});

export const { } = productSlice.actions;
export default productSlice.reducer;

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    // @ts-ignore
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/`,
  }),
  endpoints: (builder) => ({
    getproductByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetproductByNameQuery } = productApi;