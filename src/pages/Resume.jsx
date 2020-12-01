import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Box, Grid } from "@material-ui/core";

import background from "../images/background.jpg";

import Profile from "../components/Profile";
import TimeLine from "../components/TimeLine";
import PageDivider from "../components/PageDivider";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "92vh",
    height: "100%",
    // background: `linear-gradient(rgba(255, 255, 255, 0.65),rgba(255, 255, 255, 0.65)), url(${background}) no-repeat
    //  center center / 100% 100%
    //  fixed`,
    background: `rgba(255, 255, 255, 1)`,
  },
  pageContent: {
    flex: "1",
    display: "flex",
    justifyContent: "space-around",
    // flexDirection: "column",
    alignSelf: "center",
    // textAlign: "center",
    alignItems: "stretch",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  gridContainer: {
    height: "100% !important",
  },

  profileContainer: {
    // display: "flex",
    // flexDirection: "column",
    // flex: "1",
    justifyContent: "center",
    alignItems: "center",
    // textAlign: "center",
    alignSelf: "center",
    // marginTop: "10rem",
    // position: "fixed",
    padding: "0 1rem",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.pageContainer} id="resume">
        <PageDivider />
        <Grid container justify="center" className={classes.pageContent}>
          <Grid item container xs={10} md={9}>
            <TimeLine />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Resume;
