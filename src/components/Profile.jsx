import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatarImage from "../images/avatar.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginTop: "0.5rem",
    userSelect: "none",
    pointerEvents: "none",
  },
  title: {
    // color: theme.palette.primary.dark,
    color: "#3a4c5a",
    textAlign: "center",
    fontWeight: "100",
    margin: "1rem 1rem",
    userSelect: "none",
  },
  subtitle: {
    color: theme.palette.primary.light,
    marginBottom: "1.5rem",
    textAlign: "center",
    fontWeight: "600",
    textTransform: "uppercase",
    userSelect: "none",
  },
  typedContainer: {
    minWidth: "30%",
    textAlign: "center",
    zIndex: 1,
  },
  profileText: {
    color: theme.palette.primary.dark,
    fontStyle: "italic",
    fontWeight: "500",
    textAlign: "center",
  },
}));

const Profile = ({ variant }) => {
  const classes = useStyles();

  return (
    <Box position="relative" className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatarImage} alt="avatar" />
      </Grid>
      <Typography className={classes.title} variant="h3">
        <Typed strings={["Petr Žofák"]} typeSpeed={40} />
      </Typography>

      {(() => {
        switch (variant) {
          case "technologies":
            return (
              <Typography className={classes.subtitle} variant="h5">
                <Typed
                  strings={["HTML5 | CSS3 | JavaScript", "React.js | Redux"]}
                  typeSpeed={60}
                  backSpeed={60}
                  loop
                />
              </Typography>
            );

          case "profileText":
            return (
              <Typography
                variant="h6"
                component="h6"
                className={classes.profileText}
              >
                aspirující programátor webových aplikací
              </Typography>
            );

          default:
            break;
        }
      })()}
      {/* {subtitleVisible && (
        <Typography className={subtitle} variant="h5">
          <Typed
            strings={["HTML5 | CSS3 | JavaScript", "React.js | Redux"]}
            typeSpeed={60}
            backSpeed={60}
            loop
          />
        </Typography>
      )} */}
    </Box>
  );
};

export default Profile;
