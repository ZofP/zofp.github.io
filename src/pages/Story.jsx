import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Box, Grid, Typography } from "@material-ui/core";

import TimeLine from "../components/TimeLine";
import PageDivider from "../components/PageDivider";

import { Bounce, Zoom } from "react-reveal";

import { Work as WorkIcon, School as SchoolIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "92vh",
    height: "100%",
    background: `rgba(255, 255, 255, 1)`,
  },
  pageContent: {
    flex: "1",
    display: "flex",
    justifyContent: "space-around",
    alignSelf: "center",
    alignItems: "stretch",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: theme.palette.primary.dark,
    margin: "2rem 0 2.5rem 0",
    textAlign: "center",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: theme.palette.primary.dark,
    textAlign: "center",
    margin: "2rem 0 2.5rem 0",
  },
  subtext: {
    marginTop: "1rem",
    [theme.breakpoints.up("sm")]: {
      whiteSpace: "pre-wrap",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  pageItem: {
    flex: "1 0 0",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
    position: "relative",
  },
}));

const Story = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  let timeLineItems = {
    english: [
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
          "processes included sending very similar emails to many recipients one by one, only changing few words",
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
        problem:
          "time-consuming reporting processes, a lot of data copy-pasting",
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
    ],
    czech: [
      {
        type: "school",
        year: "2016",
        company: "UNIVERZITA KARLOVA",
        position1: "Ekonomie a Finance - bakalářské studium",
        description:
          "zisk pokročilých matematických dovedností a analytického myšlení",
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
          "procesy obsahovaly zasílání podobných e-mailů mnoha příjemcům jeden po druhém, měnilo se jen malé množství slov",
        solution:
          "vytvořeno makro v Excelu (kód napsán ve VBA), jež umožnilo hromadné zasílání přizpůsobitelných e-mailů stiskem jednoho tlačítka",
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
        problem:
          "zdlouhavé procesy na vytváření reportů, mnoho kopírování a vkládání dat",
        solution:
          "vytvořeno několik maker v Excelu (kód napsán ve VBA), které většinu práce na reportingu provedou stiskem jednoho tlačítka",
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
          "požádán o vybudování řešení na zpracovávání žádostí o přístup k interní databázi (žádáno zasíláním jednotlivých e-mailů)",
        solution:
          "nastaven procesní tok v MS Power Automate, který zasílá automatické e-maily žadateli, schvalovateli a technické podpoře",
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
          "žádosti zaměstnanců o absence podávány e-mailem, jejich přehled uchováván v manuálně aktualizovaných excelových tabulkách",
        solution:
          "vytvořena aplikace v MS PowerApps (kód podobný JavaScriptu) pro jednoduchou správu žádostí o absence, data uchovávána na cloudovém úložišti.\nTato aplikace je nyní využívána napříč celou firmou.",
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
    ],
  };

  props.language === "czech"
    ? (timeLineItems = timeLineItems.czech)
    : (timeLineItems = timeLineItems.english);

  let content = {
    english: {
      heading: "MY STORY",
      text: "AND THEN I THOUGHT ...",
      subtext: ["WHAT ABOUT LEARNING", " ACTUAL ", "PROGRAMMING ?"],
    },
    czech: {
      heading: "MŮJ PŘÍBĚH",
      text: "A PAK MĚ NAPADLO ...",
      subtext: ["CO TAKHLE NAUČIT SE", " SKUTEČNÉ ", "PROGRAMOVÁNÍ ?"],
    },
  };

  props.language === "czech"
    ? (content = content.czech)
    : (content = content.english);

  let recentTimeLineItems = {
    english: [
      {
        type: "school",
        year: "2021",
        company: "DATA4YOU",
        position1: "Coding Bootcamp Praha",
        description:
          "12-week fulltime programming course focusing on JavaScript, React, PHP, Laravel",
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
        position: "right",
      },
    ],
    czech: [
      {
        type: "school",
        year: "2021",
        company: "DATA4YOU",
        position1: "Coding Bootcamp Praha",
        description:
          "12týdenní celodenní kurz zaměřený na JavaScript, React, PHP, Laravel",
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
        position: "right",
      },
    ],
  };

  props.language === "czech"
    ? (recentTimeLineItems = recentTimeLineItems.czech)
    : (recentTimeLineItems = recentTimeLineItems.english);

  return (
    <>
      <Box component="div" className={classes.pageContainer} id="story">
        <Box component="div" className={classes.pageItem}>
          <Bounce left>
            <Box component="div" className={classes.heading}>
              <Typography variant="h3">{content.heading}</Typography>
            </Box>
          </Bounce>
          <Grid container justify="center" className={classes.pageContent}>
            <Grid item container xs={10} md={9}>
              <TimeLine
                language={props.language}
                timeLineItems={timeLineItems}
              />
            </Grid>
          </Grid>
          <Box component="div" className={classes.text}>
            <Zoom>
              <Box>
                <Typography variant="h4">{content.text}</Typography>
              </Box>
            </Zoom>
            <Zoom delay={500}>
              <Box className={classes.subtext}>
                <Typography variant="h4">{content.subtext[0]}</Typography>
                <Typography
                  style={{
                    fontStyle: "italic",
                    fontWeight: "bold",
                  }}
                  variant="h4"
                >
                  {content.subtext[1]}
                </Typography>
                <Typography variant="h4">{content.subtext[2]}</Typography>
              </Box>
            </Zoom>
          </Box>
          <Grid container justify="center" className={classes.pageContent}>
            <Grid item container xs={10} md={9}>
              <TimeLine
                language={props.language}
                timeLineItems={recentTimeLineItems}
              />
            </Grid>
          </Grid>
        </Box>
        <PageDivider />
      </Box>
    </>
  );
};

export default Story;
