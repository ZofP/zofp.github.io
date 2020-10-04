import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Divider } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: theme.palette.primary.main,
    height: "0.5rem",
  },
}));

const PageDivider = () => {
  const classes = useStyles();
  return <Divider className={classes.divider} variant="fullWidth" />;
};

export default PageDivider;
