import React, { useState } from "react";

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
  Close,
} from "@material-ui/icons";

import { Slide, Bounce } from "react-reveal";

import avatar from "../images/avatar.png";

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    zIndex: "2",
    alignSelf: "stretch",
    background: theme.palette.primary.main,
    position: "fixed",
    width: "100%",
  },
  navbar: {
    height: "3rem",
    minHeight: "1rem !important",
    // color: theme.palette.primary.dark,
    alignSelf: "flex-end",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  closeButton: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem 1rem 1rem auto",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.primary.dark,
      cursor: "pointer",
    },
    transition: "all 0.3s",
    alignItems: "flex-end",
  },
  title: {
    flexGrow: 1,
    color: theme.palette.secondary.main,
    userSelect: "none",
    textTransform: "uppercase",
    fontWeight: "500",
    textAlign: "end",
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
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.secondary.light,
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
    <Box className={classes.menuDrawerContainer} component="div">
      <Close className={classes.closeButton} onClick={toggleDrawer(false)} />
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
            onClick={toggleDrawer(false)}
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
      <Bounce left>
        <Toolbar className={classes.navbar} disableGutters>
          <Typography variant="h6" className={classes.title}>
            Menu
          </Typography>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
          <Drawer
            anchor="right"
            open={state.open}
            onClose={toggleDrawer(false)}
          >
            {MenuDrawer()}
          </Drawer>
        </Toolbar>
      </Bounce>
    </Box>
  );
};

export default Navbar;
