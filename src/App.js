import React, { useState } from "react";
import {
  CssBaseline, useMediaQuery,
} from '@material-ui/core/'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import './App.css';

import Navbar from "./components/Navbar"

import Homepage from "./pages/Homepage";
import Story from "./pages/Story";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

import ParticlesBackground from './components/ParticlesBackground';

import Footer from './components/Footer';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0f52ba",
      success: "#b4ff99",
      error: "#ed8e8e"
    },
    secondary: {
      main: "#ffdb97",
      light: "#fffad1"
    },

  },
  typography: {
    fontFamily: [
      'Saira',
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      laptop: 1170
    }
  }

});



function App() {


  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "english"
  );

  const storeLanguageInLocalStorage = (language) => {
    localStorage.setItem("language", language)
  }

  const handleSetLanguage = language => {
    setLanguage(language);
    storeLanguageInLocalStorage(language);
  }

  const bigScreen = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <>
      <ThemeProvider theme={theme}>
        {bigScreen &&
          < ParticlesBackground />
        }
        <CssBaseline />
        <Navbar language={language}
          handleSetLanguage={handleSetLanguage} />
        <Homepage language={language} />
        <Story language={language} />
        <Projects language={language} />
        <Contacts language={language} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App;
