import React from "react";

import { Box, Typography } from "@material-ui/core";
import { Bounce } from "react-reveal";

import { makeStyles } from "@material-ui/core/styles";

import PageDivider from "../components/PageDivider";

import ContactForm from "../components/ContactForm";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "calc(100vh - 8px)",
    height: "100%",
    background: `rgba(255, 255, 255, 1)`,
    [theme.breakpoints.between("xs", "sm")]: {
      minHeight: "0",
    },
  },
  pageItem: {
    flex: "1 0 0",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    width: "100%",
    position: "relative",
    justifyContent: "space-evenly",
    [theme.breakpoints.between("xs", "sm")]: {
      flex: "0",
      marginBottom: "1rem",
    },
  },

  heading: {
    color: theme.palette.primary.dark,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "1rem",
  },
}));

const Contacts = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="div" className={classes.pageContainer} id="contacts">
        <PageDivider />
        <Box component="div" className={classes.pageItem}>
          <Bounce left>
            <Box component="div" className={classes.heading}>
              <Typography variant="h3">CONTACT ME</Typography>
            </Box>
          </Bounce>
          <Bounce right delay={200}>
            <ContactForm />
          </Bounce>
        </Box>
      </Box>
    </>
  );
};

export default Contacts;
