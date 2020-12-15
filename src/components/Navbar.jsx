import React, { useState } from "react";

import { HashLink as Link } from "react-router-hash-link";

import Scrollspy from "react-scrollspy";

import { makeStyles } from "@material-ui/core/styles";
import {
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
  useMediaQuery,
} from "@material-ui/core/";

import {
  Apps,
  AssignmentInd,
  Home,
  ContactMail,
  Menu,
  Close,
} from "@material-ui/icons";

import { Bounce } from "react-reveal";

import avatar from "../images/avatar.png";

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    zIndex: "2",
    alignSelf: "stretch",
    background: theme.palette.primary.dark,
    position: "fixed",
    width: "100%",
  },
  navbar: {
    height: "3rem",
    minHeight: "1rem !important",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.secondary.light,
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
    color: theme.palette.secondary.light,
    userSelect: "none",
    textTransform: "uppercase",
    fontWeight: "500",
    textAlign: "end",
  },

  headersContainer: {
    display: "flex",
    flexDirection: "row",
  },
  menuDrawerContainer: {
    width: 250,
    background: theme.palette.primary.dark,
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
    "&:hover div": {
      color: theme.palette.secondary.main,
    },
  },
  listItemCurrent: {
    "& div span": {
      color: theme.palette.secondary.main,
      fontWeight: "600",
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

  const smallScreen = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const toggleDrawer = (open) => () => {
    setState({ ...state, open: open });
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -40;
    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: "smooth",
    });
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
            className={classes.listItem}
          >
            <ListItemIcon className={classes.listItem}>
              {item.itemIcon}
            </ListItemIcon>
            <ListItemText primary={item.itemText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="div" className={classes.navbarContainer}>
      <Bounce left>
        <Toolbar className={classes.navbar} disableGutters>
          {smallScreen ? (
            <>
              <Scrollspy
                componentTag={List}
                items={
                  // [menuItems.map((item) => item.itemText.toLowerCase)]
                  ["home", "resume", "portfolio", "contacts"]
                }
                offset={-48}
                currentClassName={classes.listItemCurrent}
                className={classes.headersContainer}
              >
                {menuItems.map((item, key) => (
                  <ListItem
                    button
                    key={key}
                    component={Link}
                    smooth
                    to={item.itemPath}
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    <ListItemText
                      primary={item.itemText}
                      className={classes.listItem}
                    />
                  </ListItem>
                ))}
              </Scrollspy>
            </>
          ) : (
            <>
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
            </>
          )}
        </Toolbar>
      </Bounce>
    </Box>
  );
};

export default Navbar;
