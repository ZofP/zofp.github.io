import React from "react";

import { Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

import { Bounce } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.primary.dark,
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.secondary.main,
  },
  text: {
    margin: "0",
    fontSize: "1rem",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <footer>
        <Bounce left>
          <p className={classes.text}>&copy; Petr Žofák 2020</p>
        </Bounce>
      </footer>
    </Box>
  );
};

export default Footer;
