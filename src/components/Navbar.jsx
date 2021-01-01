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

import { Icon } from "@iconify/react";
import EnglishFlag from "@iconify-icons/emojione/flag-for-united-kingdom";
import CzechFlag from "@iconify-icons/emojione/flag-for-czechia";

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
    height: "100%",
    padding: "0",
    "& a": {
      textAlign: "center",
    },
  },
  avatar: {
    display: "block",
    margin: "2rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
    pointerEvents: "none",
  },
  menuDrawerContainer: {
    width: 250,
    background: theme.palette.primary.dark,
    height: "100%",
  },
  menuDrawerItem: {
    color: theme.palette.secondary.light,
    "&:hover div": {
      color: theme.palette.secondary.main,
      transform: "translateY(-5%)",
    },
    "& div": {
      transition: "all 0.15s ease-out",
    },
  },
  languageIconsDrawerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: "0.5rem",
  },

  iconDrawerContainer: {
    "&:hover": {
      transform: "scale(1.3)",
      cursor: "pointer",
    },
    transition: "all 0.15s ease-out",
  },

  menuItem: {
    color: theme.palette.secondary.light,
    "&:hover span": {
      color: theme.palette.secondary.main,
      transform: "translateY(-5%)",
      // fontWeight: "600",
    },
    "& span": {
      transition: "all 0.15s ease-out",
    },
  },

  menuItemCurrent: {
    "& div span": {
      color: theme.palette.secondary.main,
    },
  },
  languageIconsContainer: {
    alignItems: "center",
    margin: "0 1rem 0 1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
    // transform: "scale(1.1)",
    "& svg": { cursor: "pointer" },
  },
  iconContainer: {
    "&:hover": {
      transform: "scale(1.3)",
    },
    transition: "all 0.15s ease-out",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    open: false,
  });

  let menuItems = {
    english: [
      {
        itemIcon: <Home />,
        itemText: "Home",
        itemPath: "#home",
      },
      {
        itemIcon: <AssignmentInd />,
        itemText: "Story",
        itemPath: "#story",
      },
      {
        itemIcon: <Apps />,
        itemText: "Projects",
        itemPath: "#projects",
      },
      {
        itemIcon: <ContactMail />,
        itemText: "Contacts",
        itemPath: "#contacts",
      },
    ],
    czech: [
      {
        itemIcon: <Home />,
        itemText: "Domů",
        itemPath: "#home",
      },
      {
        itemIcon: <AssignmentInd />,
        itemText: "Příběh",
        itemPath: "#story",
      },
      {
        itemIcon: <Apps />,
        itemText: "Projekty",
        itemPath: "#projects",
      },
      {
        itemIcon: <ContactMail />,
        itemText: "Kontakt",
        itemPath: "#contacts",
      },
    ],
  };

  props.language === "czech"
    ? (menuItems = menuItems.czech)
    : (menuItems = menuItems.english);

  const languages = [
    { language: "czech", flag: CzechFlag },
    { language: "english", flag: EnglishFlag },
  ];

  const notSmallScreen = useMediaQuery((theme) => theme.breakpoints.up("sm"));

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
      <Box className={classes.languageIconsDrawerContainer}>
        {languages.map((item, key) => (
          <Box className={classes.iconDrawerContainer} key={key}>
            <Icon
              onClick={() => props.handleSetLanguage(item.language)}
              icon={item.flag}
            />
          </Box>
        ))}
      </Box>
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
            className={classes.menuDrawerItem}
          >
            <ListItemIcon className={classes.menuItem}>
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
          {notSmallScreen ? (
            <>
              <Scrollspy
                componentTag={List}
                // items={menuItems.map((item) => item.itemText.toLowerCase())}
                items={menuItems.map((item) => item.itemPath.slice(1))}
                offset={-48}
                currentClassName={classes.menuItemCurrent}
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
                      className={classes.menuItem}
                    />
                  </ListItem>
                ))}
              </Scrollspy>
              <Box className={classes.languageIconsContainer}>
                {languages.map((item, key) => (
                  <Box className={classes.iconContainer} key={key}>
                    <Icon
                      onClick={() => props.handleSetLanguage(item.language)}
                      icon={item.flag}
                    />
                  </Box>
                ))}
              </Box>
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
