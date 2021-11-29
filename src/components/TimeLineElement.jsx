import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

import { makeStyles } from "@material-ui/core/styles";

import { useTheme } from "@material-ui/styles";

import {
  SentimentVeryDissatisfied as ProblemIcon,
  SentimentSatisfiedAlt as SolutionIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  timeline: {
    marginBottom: "2rem !important",
    display: "flex",
    flexDirection: "column",
    padding: "0",
    "&.vertical-timeline::before": {
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "0",
      margin: "0",
    },
  },

  dates: {
    [theme.breakpoints.up("laptop")]: {
      color: "#000",
    },

    fontWeight: "700 !important",
    fontSize: "1.3rem !important",
  },
  timelineElement: {
    marginBlockEnd: "1rem !important",
  },
  problemContainer: {
    display: "inline-flex",
    alignItems: "center",
    color: theme.palette.primary.error,
  },
  problem: {
    margin: "0 0 0 1em !important",
  },
  solutionContainer: {
    display: "inline-flex",
    alignItems: "center",
    color: theme.palette.primary.success,
  },
  solution: {
    margin: "1em 0 0 1em !important",
    whiteSpace: "pre-wrap",
  },
  divider: {
    margin: "1em 0 1em 0 !important",
    background: theme.palette.secondary.light,
  },
}));

const TimeLineElement = ({ item }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <VerticalTimelineElement
      className={classes.timelineElement}
      contentStyle={item.contentStyle}
      contentArrowStyle={item.contentArrowStyle}
      date={item.year}
      dateClassName={classes.dates}
      iconStyle={item.iconStyle}
      icon={item.icon}
      position={item.position ? item.position : ""}
    >
      <h3
        className="vertical-timeline-element-title"
        style={{
          color:
            item.type === "school"
              ? theme.palette.primary.dark
              : theme.palette.secondary.main,
        }}
      >
        {item.company}
      </h3>
      <h4 className="vertical-timeline-element-subtitle">{item.position1}</h4>
      <h4 className="vertical-timeline-element-subtitle">{item.position2}</h4>
      <p>{item.description}</p>
      <div className={classes.problemContainer}>
        {item.type === "work" && <ProblemIcon />}
        <p className={classes.problem}>{item.problem}</p>
      </div>
      <div className={classes.solutionContainer}>
        {item.type === "work" && <SolutionIcon />}
        <p className={classes.solution}>{item.solution}</p>
      </div>
    </VerticalTimelineElement>
  );
};

export default TimeLineElement;
