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

const timeLineItems = [
  {
    from_to: "9/2019 - současnost",
    position: "GENERAL LEDGER ACCOUNTANT",
    description:
      "interní specialista na zlepšování procesů (process improvement)",
    company: "DXC Technology Czech Republic s.r.o.",
  },
  {
    from_to: "2/2018 – 8/2019",
    position: "LABOR ACCOUNTING DEPUTY TEAM LEADER",
    description:
      "pověřen vedením desetičlenného týmu, který zpracovává data o docházce interních zaměstnanců v Evropě",
    company: "DXC Technology Czech Republic s.r.o.",
  },
  {
    from_to: "1/2017 – 1/2018",
    position: "LABOR ACCOUNTING ASSOCIATE PROFESSIONAL",
    description: "zpracovávání dat o docházce interních zaměstnanců v Německu",
    company: "DXC Technology Czech Republic s.r.o.",
  },
];

const useStyles = makeStyles((theme) => ({
  timeline: {
    marginRight: "1rem !important",
    "&.vertical-timeline::before": {
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.between("xs", "sm")]: {
      // "&.vertical-timeline": {
      padding: "0",
      margin: "2em 0",
    },
    // },
  },

  dates: {
    color: "#000",
    fontWeight: "600 !important",
    fontSize: "1.2rem !important",
  },
}));

const TimeLine = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <VerticalTimeline className={classes.timeline}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: theme.palette.primary.light,
          color: theme.palette.secondary.light,
        }}
        contentArrowStyle={{
          borderRight: `7px solid  ${theme.palette.primary.light}`,
        }}
        date={timeLineItems[0].from_to}
        dateClassName={classes.dates}
        iconStyle={{
          background: theme.palette.primary.light,
          color: "#fff",
        }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          GENERAL LEDGER ACCOUNTANT
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          DXC Technology Czech Republic s.r.o.
        </h4>
        <p>interní specialista na zlepšování procesů (process improvement)</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: theme.palette.secondary.light,
          color: theme.palette.primary.light,
        }}
        contentArrowStyle={{
          borderRight: `7px solid  ${theme.palette.secondary.light}`,
        }}
        date="2/2018 – 8/2019"
        dateClassName={classes.dates}
        iconStyle={{
          background: theme.palette.primary.light,
          color: "#fff",
        }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          LABOR ACCOUNTING DEPUTY TEAM LEADER
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          DXC Technology Czech Republic s.r.o.
        </h4>
        <p>
          pověřen vedením desetičlenného týmu, který zpracovává data o docházce
          interních zaměstnanců v Evropě
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: theme.palette.secondary.light,
          color: theme.palette.primary.light,
        }}
        contentArrowStyle={{
          borderRight: `7px solid  ${theme.palette.secondary.light}`,
        }}
        date="1/2017 – 1/2018"
        dateClassName={classes.dates}
        iconStyle={{
          background: theme.palette.primary.light,
          color: "#fff",
        }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          LABOR ACCOUNTING ASSOCIATE PROFESSIONAL
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          CSC Computer Sciences s.r.o.
        </h4>
        <p>zpracovávání dat o docházce interních zaměstnanců v Německu</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{
          background: theme.palette.secondary.main,
          color: theme.palette.primary.dark,
        }}
        contentArrowStyle={{
          borderRight: `7px solid  ${theme.palette.secondary.main}`,
        }}
        date="2016"
        dateClassName={classes.dates}
        iconStyle={{
          background: theme.palette.secondary.main,
          color: theme.palette.primary.dark,
        }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Bakalářský titul v oboru Ekonomie a finance
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Univerzita Karlova v Praze
        </h4>
        <p></p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimeLine;
