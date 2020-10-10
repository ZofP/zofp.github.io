import React from "react";

import { Box, Typography, TextField, Button } from "@material-ui/core";

import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";

import SendIcon from "@material-ui/icons/Send";

import background from "../images/background.jpg";

import PageDivider from "../components/PageDivider";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    height: "100%",
    background: `linear-gradient(rgba(255, 255, 255, 0.85),rgba(255, 255, 255, 0.85)), url(${background}) no-repeat
     center center / 100% 100%
     fixed`,
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
    position: "relative",
  },
  pageSubitem: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    justifyContent: "center",
  },
  heading: {
    color: theme.palette.primary.dark,
  },
  button: {
    marginTop: "1rem",
    color: theme.palette.primary.dark,
    borderColor: theme.palette.primary.dark,
  },
}));

const InputField = withStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: theme.palette.primary.dark,
      fontSize: "1rem !important",
      fontWeight: "bold !important",
    },
    "& label": {
      color: theme.palette.primary.main,
      fontWeight: "bold",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldSet": {
        borderColor: theme.palette.primary.main,
      },
      "&:hover fieldSet": {
        borderColor: theme.palette.primary.dark,
      },
      "&.Mui-focused fieldSet": {
        borderColor: theme.palette.primary.dark,
      },
    },
  },
}))(TextField);

const Contacts = () => {
  const classes = useStyles();
  const theme = useTheme();

  const InputFields = [
    {
      fieldName: "Name",

      required: true,
      style: {
        color: theme.palette.primary.main,
      },
    },
    {
      fieldName: "Email",
      multiline: false,
      required: true,
      style: {
        color: theme.palette.primary.main,
      },
    },
    {
      fieldName: "Company Name",
      multiline: false,
      style: {
        color: theme.palette.primary.main,
      },
    },

    {
      fieldName: "Message",
      multiline: true,
      required: true,
      style: {
        height: "6rem",
      },
    },
  ];
  return (
    <>
      <Box component="div" className={classes.pageContainer} id="contacts">
        <PageDivider />

        <Box component="div" className={classes.pageItem}>
          <Box
            component="div"
            className={`${classes.pageSubitem} ${classes.heading}`}
          >
            <Typography variant="h2">CONTACT ME</Typography>

            {InputFields.map(
              ({
                required = false,
                multiline = false,
                fieldName,
                style: { color = theme.palette.primary.main, height = "auto" },
              }) => (
                <InputField
                  required={required}
                  fullWidth={true}
                  label={fieldName}
                  variant="outlined"
                  inputProps={{ style: { color, height } }}
                  margin="dense"
                  size="medium"
                  multiline={multiline}
                />
              )
            )}
            <Button
              className={classes.button}
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
            >
              SEND
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contacts;
