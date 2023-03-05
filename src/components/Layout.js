import React from "react";
import NavItems from "./NavItems"
import { AppBar, Toolbar, Typography, Drawer } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  // The main flex container for the app's layout. Its min-height
  // is set to `100vh` so it always fill the height of the screen.
  root: {
    display: "flex",
    minHeight: "100vh",
    zIndex: 1,
    position: "relative",
    overflow: "hidden",
    backgroundColor: theme.palette.background.default
  },
  appBar: {
    height: 64,
    // yIndex: theme.zIndex.drawer + 1
  },
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
  toolbar:{
    justifyContent:'space-between'
  },
  // Styles for the root `div` element in the `Drawer` component.
  drawer: {
    zIndex: 0,
    width: theme.layout.drawerWidth,
  },
  // Styles for the `Paper` component rendered by `Drawer`.
  drawerPaper: {
    width: "inherit",
    paddingTop: 64 // equal to AppBar height
  },
  // Styles for the content area. It fills the available space
  // in the flex container to the right (or left) of the drawer.
  appContent:{
    flex: "1 1 100%", // https://github.com/philipwalton/flexbugs#flexbug-17
    maxWidth: "100%", // https://github.com/philipwalton/flexbugs#flexbug-17
    paddingTop: 80, // equal to AppBar height + 16px
    margin: "0 auto",
    // Set the max content width for each breakpoint
    // Content will be centered in the space to the right/left of drawer
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values.lg
    }
  }
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            Welcome to the Mum's Deal Page!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <NavItems />
      </Drawer>
      <main className={classes.appContent}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
