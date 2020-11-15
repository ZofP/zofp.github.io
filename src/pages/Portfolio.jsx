import React from "react";

import { Box, Typography } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

import PortfolioCardList from "../components/PortfolioCardList";

import background from "../images/background.jpg";
import ParticlesBackground from "../components/ParticlesBackground";
import PageDivider from "../components/PageDivider";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    height: "100%",
    background: `linear-gradient(rgba(255, 255, 255, 0.65),rgba(255, 255, 255, 0.65)), url(${background}) no-repeat
     center center / 100% 100%
     fixed`,
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
    position: "relative",
  },
  pageSubitem: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    justifyContent: "center",
  },
  heading: {
    color: theme.palette.primary.dark,
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="div" className={classes.pageContainer} id="portfolio">
        <PageDivider />

        <Box component="div" className={classes.pageItem}>
          {/* <ParticlesBackground /> */}
          <Box
            component="div"
            className={`${classes.pageSubitem} ${classes.heading}`}
          >
            <Typography variant="h2">MY PROJECTS</Typography>
          </Box>
          <Box component="div" className={classes.pageSubitem}>
            <PortfolioCardList />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Portfolio;
