import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Box, Grid } from "@material-ui/core";

import background from "../images/background.jpg";

import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import TimeLine from "../components/TimeLine";
import ParticlesBackground from "../components/ParticlesBackground";

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
  pageContent: {
    flex: "1",
    display: "flex",
    justifyContent: "space-around",
    // flexDirection: "column",
    alignSelf: "center",
    // textAlign: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "relative",
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
      <Box component="div" className={classes.pageContainer}>
        <Navbar />
        <Box component="div" className={classes.pageContent}>
          <ParticlesBackground />
          <Grid container justify="center" height="100%">
            <Grid
              item
              xs={12}
              // sm={6} md={4}
              md={3}
              className={classes.profileContainer}
            >
              <Profile variant="profileText" />
            </Grid>
            <Grid
              item
              xs={10}
              // sm={6} md={4}
              md={9}
              // className={classes.profileContainer}
            >
              <TimeLine />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
