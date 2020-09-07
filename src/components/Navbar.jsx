import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core/";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.secondary.light,
  },
  title: {
    flexGrow: 1,
    color: theme.palette.secondary.light,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    open: false,
  });

  const toggleDrawer = (open) => () => {
    console.log(open);
    setState({ ...state, [open]: open });
  };

  const MenuDrawer = () => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleDrawer(false)}
    ></Box>
  );

  return (
    <Box component="div" zIndex="2">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
