import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { forEach, map, max, set, uniq } from "lodash";

const apiUrl = process.env.REACT_APP_API_URL;
const apiSecret = process.env.REACT_APP_API_SECRET;

export const ProductsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.set('secretKey', apiSecret)
      return headers
    }
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products/best-selling-products-by-subcategory",
      transformResponse: (response) => {
        forEach(response, (obj) => {
          const variantsPrices = uniq(map(obj.variants, 'price'));
          set(obj, 'variantsPrices', variantsPrices.map(Number));
        });
        return response;
      }
    }),
    getProductTypes: builder.query({
      query: () => "products/best-selling-products-by-subcategory",
      transformResponse: (response) => {
        return uniq(response.map(obj => obj.product_type));
      }
    }),
    getMaxPriceProduct: builder.query({
      query: () => "products/best-selling-products-by-subcategory",
      transformResponse: (response) => {
        forEach(response, (obj) => {
          const variantsPrices = uniq(map(obj.variants, 'price'));
          set(obj, 'variantsPrices', variantsPrices.map(Number));
        });
        return max(response.map(o => max(o.variantsPrices)));
      }
    })
  })
});

export const { useGetAllProductsQuery, useGetProductTypesQuery, useGetMaxPriceProductQuery} = ProductsApi;
