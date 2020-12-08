import React from 'react';
import {
  CssBaseline,
} from '@material-ui/core/'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import './App.css';

import Navbar from "./components/Navbar"

import Homepage from './pages/Homepage';
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";
import ParticlesBackground from './components/ParticlesBackground';



const theme = createMuiTheme({
  palette: {
    primary: {
      // brick red:
      // main: "#AF0001",
      // experiment:
      main: "#0f52ba",

      mainGradient: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",

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
      </ThemeProvider>
    </>
  )
}

export default App;
