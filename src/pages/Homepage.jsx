import React from "react";

import { Box } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import PortfolioCardList from "../components/PortfolioCardList";

import background from "../images/background.jpg";
import ParticlesBackground from "../components/ParticlesBackground";

const useStyles = makeStyles({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    height: "100%",
    background: `linear-gradient(rgba(255, 255, 255, 0.65),rgba(255, 255, 255, 0.65)), url(${background}) no-repeat center center / 100% 100% fixed`,
    // justifyContent: "space-evenly",
    // alignContent: "center",
    // alignItems: "center",
    // textAlign: "center",
  },
  pageItem: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    width: "100%",
  },
  pageSubitem: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    justifyContent: "center",
  },
});

const Homepage = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="div" className={classes.pageContainer}>
        <Navbar alignSelf="stretch" />

        <Box component="div" className={classes.pageItem}>
          <ParticlesBackground />
          <Profile className={classes.pageSubitem} />

          <PortfolioCardList className={classes.pageSubitem} />
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
