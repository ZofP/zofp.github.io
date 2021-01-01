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

import { TiHtml5 as HTMLicon } from "react-icons/ti";
import { SiCsswizardry as CSSicon } from "react-icons/si";
import { SiJavascript as JSicon } from "react-icons/si";
import { SiReact as REACTicon } from "react-icons/si";

import backroads from "../images/backroads.jpeg";
import coffeebar from "../images/coffeebar.jpeg";
import pixabay from "../images/pixabay.jpg";
import avatarImage from "../images/avatar.png";

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
        name: "Personal Portfolio \n (This Page)",
        image: avatarImage,
        text: "My personal portfolio web page. Made from scratch.",
        icons: [{ title: "React", component: <REACTicon /> }],
        source: "/",
        demo: "/",
      },
      {
        name: "Search Pixabay Pictures Project",
        image: pixabay,
        text:
          "Web page that allows to search pictures from public Pixabay API. Made from scratch.",
        icons: [{ title: "React", component: <REACTicon /> }],
        source: "https://github.com/ZofP/search-pixabay-pictures",
        demo: "https://zofp.github.io/search-pixabay-pictures/",
      },
      {
        name: "Backroads Project",
        image: backroads,
        text:
          "Web page of a fictional Backroads travel agency. Made as a part of an online course.",
        icons: [
          { title: "HTML", component: <HTMLicon /> },
          { title: "CSS", component: <CSSicon /> },
          { title: "JavaScript", component: <JSicon /> },
        ],
        source: "https://github.com/ZofP/backroads-JS-project",
        demo: "https://zofp.github.io/backroads-JS-project/index.html",
      },
      {
        name: "Coffee Bar Project",
        image: coffeebar,
        text:
          "Web page of a fictional coffee bar. Main focus on CSS, with a couple of JavaScript effects. Made as a part of an online course.",
        icons: [
          { title: "HTML", component: <HTMLicon /> },
          { title: "CSS", component: <CSSicon /> },
          { title: "JavaScript", component: <JSicon /> },
        ],
        source: "https://github.com/ZofP/coffee-bar-JS-project",
        demo: "https://zofp.github.io/coffee-bar-JS-project/",
      },
    ],
    czech: [
      {
        name: "Osobní portfolio \n (tato stránka)",
        image: avatarImage,
        text: "Moje osobní webová stránka portfolia. Vytvořeno od nuly.",
        icons: [{ title: "React", component: <REACTicon /> }],
        source: "/",
        demo: "/",
      },
      {
        name: "Vyhledavač Pixabay obrázků",
        image: pixabay,
        text:
          "Webová stránka umožňující vyhledat obrázky z veřejného Pixabay API. Vytvořeno od nuly.",
        icons: [{ title: "React", component: <REACTicon /> }],
        source: "https://github.com/ZofP/search-pixabay-pictures",
        demo: "https://zofp.github.io/search-pixabay-pictures/",
      },
      {
        name: "Backroads Projekt",
        image: backroads,
        text:
          "Webová stránka fiktivní cestovní agentury Backroads. Vytvořeno jako součást online kurzu.",
        icons: [
          { title: "HTML", component: <HTMLicon /> },
          { title: "CSS", component: <CSSicon /> },
          { title: "JavaScript", component: <JSicon /> },
        ],
        source: "https://github.com/ZofP/backroads-JS-project",
        demo: "https://zofp.github.io/backroads-JS-project/index.html",
      },
      {
        name: "Coffee Bar Projekt",
        image: coffeebar,
        text:
          "Webová stránka fiktivní kavárny. Zaměřeno předevšim na CSS a pár efektů v JavaScriptu. Vytvořeno jako součást online kurzu.",
        icons: [
          { title: "HTML", component: <HTMLicon /> },
          { title: "CSS", component: <CSSicon /> },
          { title: "JavaScript", component: <JSicon /> },
        ],
        source: "https://github.com/ZofP/coffee-bar-JS-project",
        demo: "https://zofp.github.io/coffee-bar-JS-project/",
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
