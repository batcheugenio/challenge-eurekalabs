import React from "react";
import { Box, Divider, FormControl, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProductTypeFilter from "./ProductTypeFilter";
import RangeSlider from "./RangeSlider";
import { useGetProductTypesQuery } from "../features/Products/ProductsApi";
import Loading from "./Loading";

const useStyles = makeStyles((theme) => ({
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: `0 ${theme.spacing.unit * 3}px`,
    ...theme.mixins.toolbar
  },
  title: {
    paddingTop: 20,
    paddingBottom: 20
  }
}));

/**
 * The content of the navigation drawer.
 */
function NavFilter({ rangePrice }) {
  const classes = useStyles();
  const { data: productsTypeData, isError, isLoading , error } = useGetProductTypesQuery();

  if(isLoading) return (<Loading/>);

  return (
    <div className={classes.heading}>
      <Typography variant="body1" className={classes.title}>
        Filter Results
      </Typography>
      <Divider />
      <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <ProductTypeFilter productList={productsTypeData} />
          <RangeSlider />
        </FormControl>
      </Box>
    </div>
  );
}
export default NavFilter;
