import React, { useState } from "react";

// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

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
  navbarContainer: {
    zIndex: "2",
    alignSelf: "stretch",
  },
  navbar: {
    height: "3rem",
    minHeight: "1rem !important",
    color: theme.palette.primary.dark,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.secondary.light,
  },
  title: {
    flexGrow: 1,
    color: theme.palette.secondary.light,
    userSelect: "none",
    textTransform: "uppercase",
    fontWeight: "500",
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
  },
}));

const menuItems = [
  {
    itemIcon: <Home />,
    itemText: "Home",
    itemPath: "#home",
  },
  {
    itemIcon: <AssignmentInd />,
    itemText: "Resume",
    itemPath: "#resume",
  },
  {
    itemIcon: <Apps />,
    itemText: "Portfolio",
    itemPath: "#portfolio",
  },
  {
    itemIcon: <ContactMail />,
    itemText: "Contacts",
    itemPath: "#contacts",
  },
];

const Navbar = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    open: false,
  });

  const toggleDrawer = (open) => () => {
    setState({ ...state, open: open });
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -40;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
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
          <ListItem
            button
            key={key}
            component={Link}
            smooth
            to={item.itemPath}
            scroll={(el) => scrollWithOffset(el)}
          >
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
    <Box component="div" className={classes.navbarContainer}>
      <AppBar position="fixed">
        <Toolbar className={classes.navbar}>
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
