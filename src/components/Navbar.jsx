import React, { useState } from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core/";

import {
  Apps,
  AssignmentInd,
  Home,
  ContactMail,
  Menu,
} from "@material-ui/icons";

import avatar from "../images/avatar.png";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.secondary.light,
  },
  title: {
    flexGrow: 1,
    color: theme.palette.secondary.light,
    userSelect: "none",
  },
  menuDrawerContainer: {
    width: 250,
    background: theme.palette.primary.main,
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "2rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
    pointerEvents: "none",
  },
  listItem: {
    color: theme.palette.secondary.light,
    "&:hover": {
      color: "white",
    },
    // pointerEvents: "none",
  },
}));

const menuItems = [
  {
    itemIcon: <Home />,
    itemText: "Home",
    itemPath: "/",
  },
  {
    itemIcon: <AssignmentInd />,
    itemText: "Resume",
    itemPath: "/resume",
  },
  {
    itemIcon: <Apps />,
    itemText: "Portfolio",
    itemPath: "/portfolio",
  },
  {
    itemIcon: <ContactMail />,
    itemText: "Contacts",
    itemPath: "/contacts",
  },
];

const Navbar = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    open: false,
  });

  const toggleDrawer = (open) => () => {
    console.log(open);
    setState({ ...state, open: open });
  };

  const MenuDrawer = () => (
    <Box
      className={classes.menuDrawerContainer}
      component="div"
      onClick={toggleDrawer(false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="avatar" />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key} component={Link} to={item.itemPath}>
            <ListItemIcon className={classes.listItem}>
              {item.itemIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={item.itemText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
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
            <Menu />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Menu
          </Typography>
          <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
            {MenuDrawer()}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
