import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Icon } from "@iconify/react";
import PresentIcon from "@iconify-icons/ri/lightbulb-flash-line";
import QuestionIcon from "@iconify/icons-fa-regular/question-circle";

import { makeStyles } from "@material-ui/core/styles";

import { useTheme } from "@material-ui/styles";
import TimeLineElement from "./TimeLineElement";

const useStyles = makeStyles((theme) => ({
  timeline: {
    marginBottom: "5rem !important",
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
  lastTimelineElement: {
    marginBlockEnd: "1rem !important",
    margin: "3rem 0 2rem 0",
    [theme.breakpoints.up("laptop")]: {
      margin: "7rem 0 2rem 0",
    },
  },
}));

const TimeLine = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <VerticalTimeline className={classes.timeline}>
      {props.timeLineItems.map((item, key) => (
        <TimeLineElement key={key} item={item} />
      ))}

      <VerticalTimelineElement
        icon={
          <Icon
            icon={props.timeLineItems.length !== 1 ? PresentIcon : QuestionIcon}
          />
        }
        // icon={<Icon icon={QuestionIcon} />}
        iconStyle={{
          background: theme.palette.primary.dark,
          color: theme.palette.secondary.main,
        }}
        contentStyle={{ padding: "0" }}
        className={classes.lastTimelineElement}
      />
    </VerticalTimeline>
  );
};

export default TimeLine;
