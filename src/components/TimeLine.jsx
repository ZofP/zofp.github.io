import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  timeline: {
    marginRight: "1rem !important",
    display: "flex",
    flexDirection: "column",
    "&.vertical-timeline::before": {
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "0",
      margin: "0",
    },
  },

  dates: {
    color: "#000",
    fontWeight: "700 !important",
    fontSize: "1.3rem !important",
  },
  timelineElement: {
    marginBlock: "auto !important",
  },
}));

const TimeLine = () => {
  const classes = useStyles();
  const theme = useTheme();
  const timeLineItems = [
    {
      from_to: "2017 - present",
      position1: "Process Improvement Specialist",
      position2: "General Ledger Accountant",
      description: "management experience - former Team Lead",
      company: "DXC TECHNOLOGY",
      contentStyle: {
        background: theme.palette.primary.light,
        color: theme.palette.secondary.light,
      },
      contentArrowStyle: {
        borderRight: `7px solid  ${theme.palette.primary.light}`,
      },
      iconStyle: {
        background: theme.palette.primary.light,
        color: "#fff",
      },
      icon: <WorkIcon />,
    },
    {
      from_to: "2016",
      position1: "Bachelor degree in Economics and Finance",
      description: "",
      company: "CHARLES UNIVERSITY IN PRAGUE",
      contentStyle: {
        background: theme.palette.secondary.main,
        color: theme.palette.primary.dark,
      },
      contentArrowStyle: {
        borderRight: `7px solid  ${theme.palette.secondary.main}`,
      },
      iconStyle: {
        background: theme.palette.secondary.main,
        color: theme.palette.primary.dark,
      },
      icon: <SchoolIcon />,
    },
  ];
  return (
    <VerticalTimeline className={classes.timeline}>
      {timeLineItems.map((item, key) => (
        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${classes.timelineElement}`}
          contentStyle={item.contentStyle}
          contentArrowStyle={item.contentArrowStyle}
          date={item.from_to}
          dateClassName={classes.dates}
          iconStyle={item.iconStyle}
          icon={item.icon}
          key={key}
        >
          <h3 className="vertical-timeline-element-title">{item.company}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {item.position1}
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            {item.position2}
          </h4>
          <p>{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default TimeLine;
