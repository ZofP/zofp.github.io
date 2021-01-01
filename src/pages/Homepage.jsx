import React from "react";

import { Box } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

import Profile from "../components/Profile";

import PageDivider from "../components/PageDivider";

const useStyles = makeStyles({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    height: "100%",
    background: `rgba(255, 255, 255, 1)`,
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

const Homepage = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box component="div" className={classes.pageContainer} id="home">
        <Box component="div" className={classes.pageItem}>
          <Profile
            className={classes.pageSubitem}
            variant="technologies"
            language={props.language}
          />
        </Box>
        <PageDivider />
      </Box>
    </>
  );
};

export default Homepage;
