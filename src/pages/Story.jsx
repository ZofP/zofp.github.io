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
  subtext: {
    marginTop: "1rem",
    [theme.breakpoints.up("sm")]: {
      whiteSpace: "pre-wrap",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  pageItem: {
    flex: "1 0 0",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
    position: "relative",
  },
}));

const Story = (props) => {
  const classes = useStyles();

  let content = {
    english: {
      heading: "MY STORY",
      text: "AND THEN I THOUGHT ...",
      subtext: ["WHAT ABOUT LEARNING", " ACTUAL ", "PROGRAMMING ?"],
    },
    czech: {
      heading: "MŮJ PŘÍBĚH",
      text: "A PAK MĚ NAPADLO ...",
      subtext: ["CO TAKHLE NAUČIT SE", " SKUTEČNÉ ", "PROGRAMOVÁNÍ ?"],
    },
  };

  props.language === "czech"
    ? (content = content.czech)
    : (content = content.english);

  return (
    <>
      <Box component="div" className={classes.pageContainer} id="story">
        <Box component="div" className={classes.pageItem}>
          <Bounce left>
            <Box component="div" className={classes.heading}>
              <Typography variant="h3">{content.heading}</Typography>
            </Box>
          </Bounce>
          <Grid container justify="center" className={classes.pageContent}>
            <Grid item container xs={10} md={9}>
              <TimeLine language={props.language} />
            </Grid>
          </Grid>
          <Box component="div" className={classes.text}>
            <Zoom>
              <Box>
                <Typography variant="h4">{content.text}</Typography>
              </Box>
            </Zoom>
            <Zoom delay={500}>
              <Box className={classes.subtext}>
                <Typography variant="h4">{content.subtext[0]}</Typography>
                <Typography
                  style={{
                    fontStyle: "italic",
                    fontWeight: "bold",
                  }}
                  variant="h4"
                >
                  {content.subtext[1]}
                </Typography>
                <Typography variant="h4">{content.subtext[2]}</Typography>
              </Box>
            </Zoom>
          </Box>
        </Box>
        <PageDivider />
      </Box>
    </>
  );
};

export default Story;
