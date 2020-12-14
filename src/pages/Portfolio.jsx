import React from "react";

import { Box, Typography } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

import PortfolioCardList from "../components/PortfolioCardList";

import PageDivider from "../components/PageDivider";

import { Bounce } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    height: "100%",
    background: `rgba(255, 255, 255, 1)`,
  },
  pageItem: {
    flex: "1 0 0",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    width: "100%",
    position: "relative",
    marginBottom: "1rem",
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: theme.palette.primary.dark,
    margin: "1rem",
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="div" className={classes.pageContainer} id="portfolio">
        <Box component="div" className={classes.pageItem}>
          <Bounce left>
            <Box component="div" className={classes.heading}>
              <Typography variant="h3">MY PROJECTS</Typography>
            </Box>
          </Bounce>
          <Bounce right delay={200}>
            <PortfolioCardList />
          </Bounce>
        </Box>
        <PageDivider />
      </Box>
    </>
  );
};

export default Portfolio;
