import React from 'react';
import {
  CssBaseline,
} from '@material-ui/core/'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import './App.css';

import Homepage from './pages/Homepage';
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";
import ParticlesBackground from './components/ParticlesBackground';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#AF0001",
    },
    secondary: {
      main: "#ffba94",
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
        <Homepage />
        <Resume />
        <Portfolio />
        <Contacts />
      </ThemeProvider>
    </>
  )
}

export default App;
