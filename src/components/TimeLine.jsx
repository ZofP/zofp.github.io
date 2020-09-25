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
    "&.vertical-timeline::before": {
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "0",
      margin: "2em 0",
    },
  },

  dates: {
    color: "#000",
    fontWeight: "700 !important",
    fontSize: "1.3rem !important",
  },
}));

const TimeLine = () => {
  const classes = useStyles();
  const theme = useTheme();
  const timeLineItems = [
    {
      from_to: "9/2019 - současnost",
      position: "GENERAL LEDGER ACCOUNTANT",
      description:
        "interní specialista na zlepšování procesů (process improvement)",
      company: "DXC Technology Czech Republic s.r.o.",
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
      from_to: "2/2018 – 8/2019",
      position: "LABOR ACCOUNTING DEPUTY TEAM LEADER",
      description:
        "pověřen vedením desetičlenného týmu, který zpracovává data o docházce interních zaměstnanců v Evropě",
      company: "DXC Technology Czech Republic s.r.o.",
      contentStyle: {
        background: theme.palette.secondary.light,
        color: theme.palette.primary.light,
      },
      contentArrowStyle: {
        borderRight: `7px solid  ${theme.palette.secondary.light}`,
      },
      iconStyle: {
        background: theme.palette.primary.light,
        color: "#fff",
      },
      icon: <WorkIcon />,
    },
    {
      from_to: "1/2017 – 1/2018",
      position: "LABOR ACCOUNTING ASSOCIATE PROFESSIONAL",
      description:
        "zpracovávání dat o docházce interních zaměstnanců v Německu",
      company:
        "CSC Computer Sciences s.r.o | DXC Technology Czech Republic s.r.o.",
      contentStyle: {
        background: theme.palette.secondary.light,
        color: theme.palette.primary.light,
      },
      contentArrowStyle: {
        borderRight: `7px solid  ${theme.palette.secondary.light}`,
      },
      iconStyle: {
        background: theme.palette.primary.light,
        color: "#fff",
      },
      icon: <WorkIcon />,
    },
    {
      from_to: "2016",
      position: "Bakalářský titul v oboru Ekonomie a finance",
      description: "",
      company: "Univerzita Karlova v Praze",
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
      {timeLineItems.map((item) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={item.contentStyle}
          contentArrowStyle={item.contentArrowStyle}
          date={item.from_to}
          dateClassName={classes.dates}
          iconStyle={item.iconStyle}
          icon={item.icon}
        >
          <h3 className="vertical-timeline-element-title">{item.position}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
          <p>{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default TimeLine;
