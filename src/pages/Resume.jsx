import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Box, Grid, Typography } from "@material-ui/core";

import TimeLine from "../components/TimeLine";
import PageDivider from "../components/PageDivider";

import { Bounce, Zoom } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "92vh",
    height: "100%",
    background: `rgba(255, 255, 255, 1)`,
  },
  pageContent: {
    flex: "1",
    display: "flex",
    justifyContent: "space-around",
    alignSelf: "center",
    alignItems: "stretch",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: theme.palette.primary.dark,
    margin: "2rem 0 2.5rem 0",
    textAlign: "center",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: theme.palette.primary.dark,
    textAlign: "center",
    margin: "2rem 0 2.5rem 0",
  },
  pageItem: {
    flex: "1 0 0",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignSelf: "center",
    // textAlign: "center",
    alignItems: "center",
    width: "100%",
    position: "relative",
    // marginBottom: "1rem",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.pageContainer} id="resume">
        <Box component="div" className={classes.pageItem}>
          <Bounce left>
            <Box component="div" className={classes.heading}>
              <Typography variant="h3">MY STORY</Typography>
            </Box>
          </Bounce>
          <Grid container justify="center" className={classes.pageContent}>
            {/* <Grid item container justify="center" xs={10} md={9}> */}

            {/* </Grid> */}
            <Grid item container xs={10} md={9}>
              <TimeLine />
            </Grid>
          </Grid>
          <Box component="div" className={classes.text}>
            <Zoom>
              <Box>
                <Typography variant="h4">AND THEN I THOUGHT ...</Typography>
              </Box>
            </Zoom>
            <Zoom delay={500}>
              <Box style={{ marginTop: "1rem" }}>
                <Typography variant="h4">
                  WHAT ABOUT LEARNING{" "}
                  <b>
                    <i>ACTUAL</i>
                  </b>{" "}
                  PROGRAMMING ?
                </Typography>
              </Box>
            </Zoom>
          </Box>
        </Box>
        <PageDivider />
      </Box>
    </>
  );
};

export default Resume;
