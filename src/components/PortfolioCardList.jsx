import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Tooltip,
  Zoom,
} from "@material-ui/core";

import { SiReact as ReactIcon } from "react-icons/si";
import { SiRedux as ReduxIcon } from "react-icons/si";
import { SiFirebase as FirebaseIcon } from "react-icons/si";

import pixabay from "../images/pixabay.jpg";
import avatarImage from "../images/avatar.png";
import youtubeClone from "../images/youtube-clone.png";
import facebookClone from "../images/facebook-clone.png";

const useStyles = makeStyles((theme) => ({
  cardListContainer: {
    maxWidth: "100vw",
    zIndex: "0",
    display: "flex",

    userSelect: "none",

    [theme.breakpoints.between("md", "sm")]: {
      padding: "0",
      margin: "0",
    },
  },
  cardContainer: {
    margin: "0.5rem",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "rgba(204, 204, 204, 0.2)",
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.05)",
      background: theme.palette.secondary.light,
    },
    paddingBottom: "0.5rem",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    justifyContent: "space-between",
  },
  cardActions: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-around",
    flex: "0 0 5rem",
  },
  cardImg: {
    pointerEvents: "none",
  },
  cardIconsContainer: {
    display: "flex",
    width: "60%",
    justifyContent: "space-evenly",
    margin: "0 auto 0.5rem auto",
    fontSize: "1.5rem",
  },
}));

const PortfolioCardList = (props) => {
  const classes = useStyles();

  let projectDetails = {
    english: [
      {
        name: "YouTube Clone",
        image: youtubeClone,
        text: "App showing popular video sharing site features.",
        icons: [
          { title: "React", component: <ReactIcon /> },
          { title: "Redux", component: <ReduxIcon /> },
          { title: "Firebase", component: <FirebaseIcon /> },
        ],
        source: "https://github.com/ZofP/youtube-clone-project",
        demo: "https://zofp.github.io/youtube-clone-project/",
      },
      {
        name: "Facebook Clone",
        image: facebookClone,
        text: "App showing popular social media site features.",
        icons: [
          { title: "React", component: <ReactIcon /> },
          { title: "Firebase", component: <FirebaseIcon /> },
        ],
        source: "https://github.com/ZofP/facebook-clone-project",
        demo: "https://zofp.github.io/facebook-clone-project/",
      },
      {
        name: "Pixabay Pictures Search",
        image: pixabay,
        text: "App that allows to search pictures from public Pixabay API.",
        icons: [{ title: "React", component: <ReactIcon /> }],
        source: "https://github.com/ZofP/search-pixabay-pictures",
        demo: "https://zofp.github.io/search-pixabay-pictures/",
      },
      {
        name: "Personal Portfolio \n (This Page)",
        image: avatarImage,
        text: "My personal portfolio web page.",
        icons: [{ title: "React", component: <ReactIcon /> }],
        source: "https://github.com/ZofP/zofp.github.io",
        demo: "/",
      },
    ],
    czech: [
      {
        name: "YouTube Clone",
        image: youtubeClone,
        text: "Aplikace ukazující některé funkce populárního serveru pro sdílení videosouborů.",
        icons: [
          { title: "React", component: <ReactIcon /> },
          { title: "Redux", component: <ReduxIcon /> },
          { title: "Firebase", component: <FirebaseIcon /> },
        ],
        source: "https://github.com/ZofP/youtube-clone-project",
        demo: "https://zofp.github.io/youtube-clone-project/",
      },
      {
        name: "Facebook Clone",
        image: facebookClone,
        text: "Aplikace ukazující některé funkce populárního sociálního média.",
        icons: [
          { title: "React", component: <ReactIcon /> },
          { title: "Firebase", component: <FirebaseIcon /> },
        ],
        source: "https://github.com/ZofP/facebook-clone-project",
        demo: "https://zofp.github.io/facebook-clone-project/",
      },
      {
        name: "Vyhledavač Pixabay obrázků",
        image: pixabay,
        text: "Aplikace umožňující vyhledat obrázky z veřejného Pixabay API.",
        icons: [{ title: "React", component: <ReactIcon /> }],
        source: "https://github.com/ZofP/search-pixabay-pictures",
        demo: "https://zofp.github.io/search-pixabay-pictures/",
      },
      {
        name: "Osobní portfolio \n (tato stránka)",
        image: avatarImage,
        text: "Moje osobní portfolio.",
        icons: [{ title: "React", component: <ReactIcon /> }],
        source: "https://github.com/ZofP/zofp.github.io",
        demo: "/",
      },
    ],
  };

  props.language === "czech"
    ? (projectDetails = projectDetails.czech)
    : (projectDetails = projectDetails.english);

  return (
    <Grid container justify="center" className={classes.cardListContainer}>
      {projectDetails.map(({ name, image, text, icons, source, demo }, key) => (
        <Grid
          item
          xs={8}
          sm={8}
          md={2}
          key={key}
          className={classes.cardContainer}
          component={Card}
        >
          <CardMedia
            component="img"
            alt={name}
            height="220"
            image={image}
            src={image}
            className={classes.cardImg}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5">
              {name}
            </Typography>
            <Box component="div" className={classes.cardIconsContainer}>
              {icons.map((icon, key) => (
                <Tooltip
                  title={icon.title}
                  arrow
                  TransitionComponent={Zoom}
                  key={key}
                >
                  <Box component="div">{icon.component}</Box>
                </Tooltip>
              ))}
            </Box>

            <Typography variant="body2" color="textSecondary" component="p">
              {text}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button
              href={source}
              target="_blank"
              variant="contained"
              size="small"
              color="secondary"
            >
              {props.language === "czech"
                ? "Zdrojový kód na Github"
                : "Source code on Github"}
            </Button>

            {image !== avatarImage && (
              <Button
                href={demo}
                target="_blank"
                variant="contained"
                size="small"
                color="primary"
              >
                {props.language === "czech" ? "Ukázka" : "Live demo"}
              </Button>
            )}
          </CardActions>
        </Grid>
      ))}
    </Grid>
  );
};

export default PortfolioCardList;
