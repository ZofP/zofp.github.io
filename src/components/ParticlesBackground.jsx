import React from "react";

import Particles from "react-particles-js";

import { makeStyles } from "@material-ui/core/styles";

import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute !important",
    opacity: "0.6",
    // zIndex: "1",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

const ParticlesBackground = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 200,
              densitiy: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0.4,
                color: "",
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
            color: {
              value: theme.palette.primary.main,
            },

            lineLinked: {
              color: {
                value: theme.palette.primary.dark,
              },
            },
          },
        }}
      />
    </>
  );
};

export default ParticlesBackground;
