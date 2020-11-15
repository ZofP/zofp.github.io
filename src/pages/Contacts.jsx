import React, { useState } from "react";

import { Controller, useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

import emailjs from "emailjs-com";

import { Box, Typography, Button } from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import SendIcon from "@material-ui/icons/Send";

import background from "../images/background.jpg";

import PageDivider from "../components/PageDivider";

import InputField from "../components/InputField";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    height: "100%",
    background: `linear-gradient(rgba(255, 255, 255, 0.90),rgba(255, 255, 255, 0.90)), url(${background}) no-repeat
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

const Contacts = () => {
  const classes = useStyles();
  const theme = useTheme();

  const InputFields = [
    {
      fieldName: "name",
      fieldLabel: "Name",
      required: true,
      style: {
        color: theme.palette.primary.main,
      },
    },
    {
      fieldName: "email",
      fieldLabel: "Email",
      multiline: false,
      required: true,
      style: {
        color: theme.palette.primary.main,
      },
    },
    {
      fieldName: "companyName",
      fieldLabel: "Company Name",
      multiline: false,
      style: {
        color: theme.palette.primary.main,
      },
    },

    {
      fieldName: "message",
      fieldLabel: "Message",
      multiline: true,
      required: true,
      style: {
        color: theme.palette.primary.main,
        height: "6rem",
      },
    },
  ];

  const defaultInputValues = InputFields.reduce(
    (acc, cur) => ({ ...acc, [cur.fieldName]: "" }),
    {}
  );

  const [state, setState] = useState(defaultInputValues);

  const methods = useForm({
    defaultValues: defaultInputValues,
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "gmail",
        process.env.REACT_APP_TEMPLATE_ID,
        state,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

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

            <form noValidate onSubmit={() => methods.handleSubmit(onSubmit)}>
              {InputFields.map(
                (
                  {
                    required = false,
                    multiline = false,
                    fieldName,
                    fieldLabel,
                    style,
                  },
                  key
                ) => (
                  <Controller
                    as={InputField}
                    control={methods.control}
                    key={key}
                    required={required}
                    fullWidth={true}
                    label={fieldLabel}
                    variant="outlined"
                    inputProps={{
                      style: {
                        ...style,
                        borderColor: methods.errors[fieldName] && "red",
                      },
                      name: fieldName,
                      onChange: (event) => {
                        setState({ ...state, [fieldName]: event.target.value });
                        console.log(state);
                        console.log(methods.errors);
                      },
                    }}
                    margin="dense"
                    size="medium"
                    multiline={multiline}
                    name={fieldName}
                    rules={{
                      required: {
                        value: required,
                        message: "THIS FIELD IS REQUIRED",
                      },
                      validate: (input) =>
                        !isEmail(input) && fieldName === "email"
                          ? "THIS FIELD MUST BE IN EMAIL FORMAT"
                          : undefined,
                    }}
                    error={Boolean(methods.errors[fieldName])}
                    helperText={
                      methods.errors[fieldName]
                        ? methods.errors[fieldName].message
                        : ""
                    }
                  />
                )
              )}
              <Button
                type="submit"
                className={classes.button}
                variant="outlined"
                fullWidth={true}
                endIcon={<SendIcon />}
                onClick={(e) => {
                  sendEmail(e);
                }}
                disabled={!methods.formState.isValid}
              >
                SEND
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contacts;
