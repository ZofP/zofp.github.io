import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {
  Work as WorkIcon,
  School as SchoolIcon,
  SentimentVeryDissatisfied as ProblemIcon,
  SentimentSatisfiedAlt as SolutionIcon,
} from "@material-ui/icons";

import { Icon } from "@iconify/react";
import PresentIcon from "@iconify-icons/ri/lightbulb-flash-line";

import { makeStyles } from "@material-ui/core/styles";

import { useTheme } from "@material-ui/styles";

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
  lastTimelineElement: {
    marginBlockEnd: "1rem !important",
    margin: "3rem 0 2rem 0",
    [theme.breakpoints.up("laptop")]: {
      margin: "8rem 0 2rem 0",
    },
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

const TimeLine = () => {
  const classes = useStyles();
  const theme = useTheme();
  const timeLineItems = [
    {
      type: "school",
      year: "2016",
      company: "CHARLES UNIVERSITY IN PRAGUE",
      position1: "Bachelor degree in Economics and Finance",
      description:
        "acquired advanced math skills and strong analytical thinking",
      problem: "",
      solution: "",
      contentStyle: {
        background: theme.palette.secondary.main,
        color: theme.palette.primary.main,
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
    {
      type: "work",
      year: "2017",
      company: "CSC COMPUTER SCIENCES",
      position1: "Labor Accounting Associate Professional",
      position2: "",
      description: "",
      problem:
        "processes included sending very similar emails to various recipients one by one, only changing few words",
      solution:
        "created an Excel macro (code written in VBA) which enabled mass sending of customized emails with one button click",
      contentStyle: {
        background: theme.palette.primary.dark,
        color: theme.palette.secondary.light,
      },
      contentArrowStyle: {
        borderRight: `7px solid  ${theme.palette.primary.main}`,
      },
      iconStyle: {
        background: theme.palette.primary.dark,
        color: theme.palette.secondary.main,
      },
      icon: <WorkIcon />,
    },

    {
      type: "work",
      year: "2018",
      company: "DXC TECHNOLOGY",
      position1: "Labor Accounting Deputy Team leader",
      position2: "",
      description: "",
      problem: "time-consuming reporting processes, a lot of data copy-pasting",
      solution:
        "created multiple Excel macros (code written in VBA) to do majority of the reporting work with one button click",
      contentStyle: {
        background: theme.palette.primary.dark,
        color: theme.palette.secondary.light,
      },
      contentArrowStyle: {
        borderRight: `7px solid  ${theme.palette.primary.main}`,
      },
      iconStyle: {
        background: theme.palette.primary.dark,
        color: theme.palette.secondary.main,
      },
      icon: <WorkIcon />,
    },
    {
      type: "work",
      year: "2019",
      company: "DXC TECHNOLOGY",
      position1: "Process Improvement Specialist",
      position2: "General Ledger Accountant",
      description: "",
      problem:
        "asked to provide a solution for processing access requests to internal database (done by sending emails manually)",
      solution:
        "set up a process flow in MS Power Automate which sends automatic emails to requester, approvers and technical support",
      contentStyle: {
        background: theme.palette.primary.dark,
        color: theme.palette.secondary.light,
      },
      contentArrowStyle: {
        borderRight: `7px solid  ${theme.palette.primary.dark}`,
      },
      iconStyle: {
        background: theme.palette.primary.dark,
        color: theme.palette.secondary.main,
      },
      icon: <WorkIcon />,
    },
    {
      type: "work",
      year: "2020",
      company: "DXC TECHNOLOGY",
      position1: "Process Improvement Specialist",
      position2: "General Ledger Accountant",
      description: "",
      problem:
        "employee absences requests being submitted by email, their overview stored in manually updated Excel tables",
      solution:
        "created an application in MS PowerApps (code similar to JavaScript) to easily manage the absence requests, data are stored on cloud.\nThe app is now used accross the whole company.",
      contentStyle: {
        background: theme.palette.primary.dark,
        color: theme.palette.secondary.light,
      },
      contentArrowStyle: {
        borderRight: `7px solid  ${theme.palette.primary.dark}`,
      },
      iconStyle: {
        background: theme.palette.primary.dark,
        color: theme.palette.secondary.main,
      },
      icon: <WorkIcon />,
    },
  ];
  return (
    <VerticalTimeline className={classes.timeline}>
      {timeLineItems.map((item, key) => (
        <VerticalTimelineElement
          className={classes.timelineElement}
          contentStyle={item.contentStyle}
          contentArrowStyle={item.contentArrowStyle}
          date={item.year}
          dateClassName={classes.dates}
          iconStyle={item.iconStyle}
          icon={item.icon}
          key={key}
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
          <h4 className="vertical-timeline-element-subtitle">
            {item.position1}
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            {item.position2}
          </h4>
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
      ))}
      <VerticalTimelineElement
        icon={<Icon icon={PresentIcon} />}
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
