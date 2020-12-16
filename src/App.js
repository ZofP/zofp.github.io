import React from 'react';
import {
  CssBaseline,
} from '@material-ui/core/'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import './App.css';

import Navbar from "./components/Navbar"

import Homepage from "./pages/Homepage";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";

import ParticlesBackground from './components/ParticlesBackground';

import Footer from './components/Footer';



const theme = createMuiTheme({
  palette: {
    primary: {
      // brick red:
      // main: "#AF0001",
      // experiment:
      main: "#0f52ba",
      success: "#b4ff99",
      error: "#ed8e8e"
    },
    secondary: {
      // main: "#ffba94",
      // experiment:
      main: "#ffdb97",
      light: "#fffad1"
    },

  },
  typography: {
    fontFamily: [
      // 'Kanit',
      // "'Merriweather Sans'",
      // 'Poppins',
      // "'Red Hat Display'",
      'Saira',
      // 'Sarala',
      // 'Ubuntu',
      // 'Varela',

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
  return (
    <>
      <ThemeProvider theme={theme}>
        <ParticlesBackground />
        <CssBaseline />
        <Navbar />
        <Homepage />
        <Resume />
        <Portfolio />
        <Contacts />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App;
