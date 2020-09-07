import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";

import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import project1 from "../images/placeimg_345_140_tech.jpg";
import project2 from "../images/placeimg_345_140_tech.jpg";
import project3 from "../images/placeimg_345_140_tech.jpg";
import project4 from "../images/placeimg_345_140_tech.jpg";

const projectDetails = [
  {
    name: "Project 1",
    image: project1,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi dolore minima voluptatibus nulla maxime, vero illum aliquam, optio quis reiciendis mollitia natus dignissimos odit aperiam quaerat temporibus deleniti officiis.",
  },
  {
    name: "Project 2",
    image: project2,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi dolore minima voluptatibus nulla maxime, vero illum aliquam, optio quis reiciendis mollitia natus dignissimos odit aperiam quaerat temporibus deleniti officiis.",
  },
  {
    name: "Project 3",
    image: project3,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi dolore minima voluptatibus nulla maxime, vero illum aliquam, optio quis reiciendis mollitia natus dignissimos odit aperiam quaerat temporibus deleniti officiis.",
  },
  {
    name: "Project 4",
    image: project4,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi dolore minima voluptatibus nulla maxime, vero illum aliquam, optio quis reiciendis mollitia natus dignissimos odit aperiam quaerat temporibus deleniti officiis.",
  },
];

const useStyles = makeStyles({
  cardContainer: {
    // maxWidth: "25%",
    margin: "0 0.5rem 0.5rem 0.5rem",
  },
  cardListContainer: {
    // width: "100%",
    maxWidth: "100vw",
    height: "50%",
    zIndex: "0",
    display: "flex",
    justifyContent: "space-around",
    alignSelf: "center",
  },
  cardActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    // margin-top: 16px;
  },
});

const PortfolioCardList = () => {
  const { cardContainer, cardListContainer, cardActions } = useStyles();
  const theme = useTheme();
  return (
    <Box component="div" className={cardListContainer}>
      <Grid container justify="center" height="100%">
        {projectDetails.map(({ name, image, text }, key) => (
          <Grid item xs={8} sm={6} md={3} key={key}>
            <Card className={cardContainer}>
              <CardMedia
                component="img"
                alt={name}
                height="140"
                image={image}
                src={image}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {name}
                </Typography>
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
