import { Grid } from '@mui/material';
import { every, filter, includes, inRange, isEmpty, some } from 'lodash';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectView } from '../features/Filters/FiltersSlice';
import { setFilteredProducts } from '../features/Products/ProductsSlice';
import ProductCard from './ProductCard';

function FilteredProducts({ products, filters }) {
  const dispatch = useDispatch()
  const [filteredProductsState, setFilteredProductsState] = useState(products);
  const view = useSelector(selectView);
  const directionGrid = view === 'grid' ? 'row' : 'column';

  useEffect(() => {
    const {productTypes, rangePrice, sortResult} = filters;

    const minPrice = rangePrice[0];
    const maxPrice = rangePrice[1];

    const result = filter(products, (product) => {
      const {title, product_type, variantsPrices} = product;
      const searchResultFilter = title.toLowerCase().includes(sortResult.toLowerCase());
      const productTypesFilter = !isEmpty(productTypes) && includes(productTypes, product_type);
      const priceFilter = some(variantsPrices, num => inRange(num, minPrice, maxPrice + 1));

      return searchResultFilter && productTypesFilter && priceFilter;
    })
    setFilteredProductsState(result);
    dispatch(setFilteredProducts(result));
  }, [filters])

  return (
    <Grid direction={directionGrid} container spacing={2}>
    {
      filteredProductsState.map((element, index) => {
        return (
          <Grid item xs={12} md={2} key={`${index}`}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <ProductCard {...element}/>
          </Grid>
        )
      })
    }
    </Grid>
  )
}
export default FilteredProducts;
