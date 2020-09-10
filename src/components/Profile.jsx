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
    width: "100%",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Profile = () => {
  const { avatar, title, subtitle, typedContainer } = useStyles();

  return (
    <Box position="relative" className={typedContainer}>
      <Grid container justify="center">
        <Avatar className={avatar} src={avatarImage} alt="avatar" />
      </Grid>
      <Typography className={title} variant="h3">
        <Typed strings={["Petr Žofák"]} typeSpeed={40} />
      </Typography>

      <Typography className={subtitle} variant="h5">
        <Typed
          strings={["HTML5 | CSS3 | JavaScript", "React.js | Redux"]}
          typeSpeed={60}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Profile;
