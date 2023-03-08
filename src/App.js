import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import FilteredProducts from './components/FilteredProducts';
import Layout from './components/Layout';
import Loading from './components/Loading';
import ProductSearcherAppBar from './components/ProductSearcherAppBar';
import { useGetAllProductsQuery } from './features/Products/ProductsApi';

function App() {
  const { data: allProductsData, isError, isLoading, error } = useGetAllProductsQuery();
  const filters = useSelector((state) => state.filters);

  if(isLoading) return (<Loading/>);

  return (
    <div className="App">
      <Layout>
        <ProductSearcherAppBar/>
        <Box p={2}>
          <FilteredProducts products={allProductsData} filters={filters} />
        </Box>
      </Layout>
    </div>
  );
}

export default App;
