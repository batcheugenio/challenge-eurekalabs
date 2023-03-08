import React from "react";
import { FormGroup, FormLabel, Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectRangePrice, setRangePrice } from "../features/Filters/FiltersSlice";
import { useGetMaxPriceProductQuery } from "../features/Products/ProductsApi";
import Loading from "./Loading";

function RangeSlider() {
  const { data: maxPriceData, isError, isLoading, error } = useGetMaxPriceProductQuery();
  const rangePrice  = useSelector(selectRangePrice);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(setRangePrice(newValue));
  };
  if(isLoading) return (<Loading/>)
  function valueLabelFormat(value) {
    return `${value}$`;
  }

  return (
    <>
      <FormLabel component="legend">Price Range</FormLabel>
      <FormGroup>
        <Slider
            getAriaLabel={() => 'Price range'}
            min={0}
            max={maxPriceData}
            value={rangePrice}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
        />
      </FormGroup>
    </>
  );
}
export default RangeSlider;
