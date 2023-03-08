import { configureStore } from '@reduxjs/toolkit';
import FiltersReducer from '../features/Filters/FiltersSlice';
import ProductsReducer from '../features/Products/ProductsSlice';
import { ProductsApi } from '../features/Products/ProductsApi';

export const store = configureStore({
  reducer: {
    filters: FiltersReducer,
    products: ProductsReducer,
    [ProductsApi.reducerPath]: ProductsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductsApi.middleware),
});
