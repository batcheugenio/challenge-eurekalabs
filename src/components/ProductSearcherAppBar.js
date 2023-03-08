import * as React from 'react';
import { alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';
import { useDispatch, useSelector } from 'react-redux';
import { selectView, setSortResult, setView } from '../features/Filters/FiltersSlice';
import { selectFilteredProducts } from '../features/Products/ProductsSlice';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fill: 'white',
  },
  root: {
    color: 'white',
  },
  inputBase: {
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    }
  }
}));

export default function ProductSearcherAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredProducts);
  const handleChange = (event) => {
    dispatch(setSortResult(event.target.value));
  };
  const view = useSelector(selectView);
  const handleView = (event, newView) => {
    dispatch(setView(newView));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar variant="dense">
          <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Available deals: {filteredProducts.length}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <ToggleButtonGroup
              color='secondary'
              value={view}
              exclusive
              onChange={handleView}
              aria-label="view"
            >
              <ToggleButton value="grid" aria-label="grid view">
                <GridViewIcon />
              </ToggleButton>
              <ToggleButton value="list" aria-label="list view">
                <ListIcon />
              </ToggleButton>
            </ToggleButtonGroup>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                className={classes.inputBase}
                placeholder="Search a product"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChange}
              />
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}