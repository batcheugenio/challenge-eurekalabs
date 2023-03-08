import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import { capitalize } from "lodash";
import { useDispatch } from "react-redux";
import { setProductTypes } from "../features/Filters/FiltersSlice";

function ProductTypeFilter({ productList }) {

  const [checkedState, setCheckedState] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const obj = productList.reduce((acc, curr) => {
      acc[curr] = true;
      return acc;
    }, {});
    setCheckedState(obj);
  }, [productList])

  useEffect(() => {
    const trueKeys = Object.entries(checkedState)
      .filter(([key, value]) => value === true)
      .map(([key, value]) => key);
    dispatch(setProductTypes(trueKeys));
  }, [checkedState])

  const handleOnChange = (event) => {
    setCheckedState({
      ...checkedState,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <>
      <FormLabel component="legend">Product Type</FormLabel>
      <FormGroup sx={{ p: 1 }}>
        {productList.map((option, index) => {
            return (
              <FormControlLabel
                key={`formControlLabel-${index}`}
                control={
                  <Checkbox defaultChecked key={`checkbox-${index}`} checked={checkedState.option} onChange={handleOnChange} name={option} size="small"/>
                }
                label={capitalize(option)}
              />
            )
        })}
      </FormGroup>
    </>
  );
}
export default ProductTypeFilter;
