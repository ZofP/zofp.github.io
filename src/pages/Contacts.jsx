import React from "react";

import { Box, Typography } from "@material-ui/core";
import { Bounce } from "react-reveal";

import { makeStyles } from "@material-ui/core/styles";

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

const Contacts = (props) => {
  const classes = useStyles();

  let content = {
    english: {
      heading: "CONTACT ME",
    },
    czech: {
      heading: "KONTAKTUJTE MĚ",
    },
  };

  props.language === "czech"
    ? (content = content.czech)
    : (content = content.english);

  return (
    <>
      <Box component="div" className={classes.pageContainer} id="contacts">
        <Box component="div" className={classes.pageItem}>
          <Bounce left>
            <Box component="div" className={classes.heading}>
              <Typography variant="h3">{content.heading}</Typography>
            </Box>
          </Bounce>
          <Bounce right delay={200}>
            <ContactForm language={props.language} />
          </Bounce>
        </Box>
      </Box>
    </>
  );
};

export default Contacts;
