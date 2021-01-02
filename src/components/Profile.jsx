import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatarImage from "../images/avatar.png";

import { Bounce } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginTop: "0.5rem",
    userSelect: "none",
    pointerEvents: "none",
  },
  title: {
    color: theme.palette.primary.dark,
    textAlign: "center",
    fontWeight: "300",
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
    width: "100%",
  },
  profileText: {
    color: theme.palette.primary.dark,
    fontStyle: "italic",
    fontWeight: "500",
    textAlign: "center",
  },
  slide: {
    width: "100%",
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  let strings = {
    english: {
      title: ["Petr Žofák"],
      subtitle: ["aspiring web developer", "React | JavaScript"],
    },
    czech: {
      title: ["Petr Žofák"],
      subtitle: ["aspirující web developer", "React | JavaScript"],
    },
  };

  props.language === "czech"
    ? (strings = strings.czech)
    : (strings = strings.english);

  return (
    <Box className={classes.typedContainer}>
      <Box className={classes.slide}>
        <Bounce right delay={200}>
          <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatarImage} alt="avatar" />
          </Grid>
          <Typography className={classes.title} variant="h3">
            <Typed strings={strings.title} typeSpeed={40} startDelay={700} />
          </Typography>

          <Typography className={classes.subtitle} variant="h5">
            <Typed
              strings={strings.subtitle}
              typeSpeed={60}
              backSpeed={60}
              startDelay={700}
              loop
            />
          </Typography>
        </Bounce>
      </Box>
    </Box>
  );
};

export default Profile;
