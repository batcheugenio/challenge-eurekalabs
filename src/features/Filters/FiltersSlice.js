import { createSlice } from '@reduxjs/toolkit';
import { ProductsApi } from '../Products/ProductsApi';

export const FiltersSlice = createSlice({
  name: 'filters',
  initialState: {
    productTypes: [],
    maxPrice: 1000,
    rangePrice: [0,1000],
    sortResult: "",
    view: "grid"
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setProductTypes: (state, action) => {
      state.productTypes = action.payload;
    },
    setRangePrice: (state, action) => {
      state.rangePrice = action.payload;
    },
    setSortResult: (state, action) => {
      state.sortResult = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      ProductsApi.endpoints.getMaxPriceProduct.matchFulfilled,
      (state, { payload }) => {
        state.maxPrice = payload + 1
      }
    )
  },
});

export const { setProductTypes, setRangePrice, setSortResult, setView } = FiltersSlice.actions;

export const selectProductTypes = (state) => state.filters.productTypes;
export const selectRangePrice = (state) => state.filters.rangePrice;
export const selectMaxPrice = (state) => state.filters.maxPrice;
export const selectSortResult = (state) => state.filters.sortResult;
export const selectView = (state) => state.filters.view;


export default FiltersSlice.reducer;
