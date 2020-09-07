import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatarImage from "../images/avatar.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    // color: "tomato",
    color: theme.palette.primary.dark,
    // marginBottom: "0.5rem",
    textAlign: "center",
  },
  subtitle: {
    // color: "tan",
    color: theme.palette.primary.light,
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  typedContainer: {
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%,-50%)",
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

      <Typography className={subtitle} variant="h4">
        <Typed
          strings={["HTML5 | CSS3 | JavaScript ES6", "React.js | Redux"]}
          typeSpeed={60}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Profile;
