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
import coffeeshop from "../images/coffeeshop.jpeg";
import pixabay from "../images/pixabay.png";
// import project4 from "../images/placeimg_345_140_tech.jpg";

const projectDetails = [
  {
    name: "Backroads Project",
    image: backroads,
    text:
      "Webpage of a travel provider company. Made as a part of an online course.",
    icons: [
      { title: "HTML", component: <HTMLicon /> },
      { title: "CSS", component: <CSSicon /> },
      { title: "JavaScript", component: <JSicon /> },
    ],
  },
  {
    name: "Coffee Shop Project",
    image: coffeeshop,
    text:
      "Webpage of a travel provider company. Main focus on CSS, with a couple of JS effects. Made as a part of an online course.",
    icons: [
      { title: "HTML", component: <HTMLicon /> },
      { title: "CSS", component: <CSSicon /> },
      { title: "JavaScript", component: <JSicon /> },
    ],
  },
  {
    name: "Search Pixabay Pictures Project",
    image: pixabay,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi dolore minima voluptatibus nulla maxime, vero illum aliquam, optio quis reiciendis mollitia natus dignissimos odit aperiam quaerat temporibus deleniti officiis.",
    icons: [{ title: "React JS", component: <REACTicon /> }],
  },
  // {
  //   name: "Project 4",
  //   image: project4,
  //   text:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi dolore minima voluptatibus nulla maxime, vero illum aliquam, optio quis reiciendis mollitia natus dignissimos odit aperiam quaerat temporibus deleniti officiis.",
  //   icons: [<HTMLicon />, <CSSicon />, <REACTicon />],
  // },
];

const useStyles = makeStyles({
  cardListContainer: {
    maxWidth: "100vw",
    height: "50%",
    zIndex: "0",
    display: "flex",
    justifyContent: "space-between",
    alignSelf: "center",
    userSelect: "none",
    marginBottom: "1rem",
  },
  cardContainer: {
    margin: "0 0.5rem 0.5rem 0.5rem",
    // margin: "0 1rem 1rem 1rem",
    // justifyContent: "center",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardContent: {
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardActions: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-around",
  },
  cardImg: {
    pointerEvents: "none",
  },
  cardIconsContainer: {
    display: "flex",
    width: "30%",
    justifyContent: "space-around",
    margin: "0 auto 0.5rem auto",
    fontSize: "1.5rem",
  },
});

const PortfolioCardList = () => {
  const {
    cardContainer,
    cardListContainer,
    cardContent,
    cardActions,
    cardImg,
    cardIconsContainer,
  } = useStyles();
  return (
    <Box component="div" className={cardListContainer}>
      <Grid container justify="center" height="100%">
        {projectDetails.map(({ name, image, text, icons }, key) => (
          <Grid item xs={8} sm={6} md={3} key={key}>
            <Card className={cardContainer}>
              <CardMedia
                component="img"
                alt={name}
                // height="140"
                height="220"
                image={image}
                src={image}
                className={cardImg}
              />
              <CardContent className={cardContent}>
                <Typography gutterBottom variant="h5">
                  {name}
                </Typography>
                <Box component="div" className={cardIconsContainer}>
                  {icons.map((icon) => (
                    <Tooltip
                      title={icon.title}
                      arrow
                      TransitionComponent={Zoom}
                    >
                      <Box component="div">{icon.component}</Box>
                    </Tooltip>
                  ))}
                </Box>

                <Typography variant="body2" color="textSecondary" component="p">
                  {text}
                </Typography>
              </CardContent>
              <CardActions className={cardActions}>
                <Button variant="contained" size="small" color="secondary">
                  Source code on Github
                </Button>
                <Button variant="contained" size="small" color="primary">
                  Live demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioCardList;
