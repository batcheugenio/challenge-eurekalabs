import { createSlice } from "@reduxjs/toolkit";
import { sortBy } from "lodash";

export const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    filteredProducts: []
  },
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    sortByPriceHighToLow: (state) => {
      const sum = (arr) => arr.reduce((acc, val) => acc + val, 0);
      const sortedProducts = state.filteredProducts.sort((a, b) =>
        (a, b) => sum(b) - sum(a)
      );
      state.filteredProducts = sortedProducts;
    },
    sortByPriceLowToHigh: (state) => {
      const sum = (arr) => arr.reduce((acc, val) => acc + val, 0);
      const sortedProducts = state.filteredProducts.sort((a, b) =>
        (a, b) => sum(a) - sum(b)
      );
      state.filteredProducts = sortedProducts;
    },
    sortByTitle: (state) => {
      const sortedProducts = sortBy(state.filteredProducts, ['title']);
      state.filteredProducts = sortedProducts;
    }
  }
});


export const { setFilteredProducts, sortByPriceHighToLow, sortByPriceLowToHigh, sortByTitle } = ProductsSlice.actions;

export const selectFilteredProducts = (state) => state.products.filteredProducts;

export default ProductsSlice.reducer;