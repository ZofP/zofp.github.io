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
      // main: "#B0BEC5",
      main: "#ffba94",
      light: "#fffad1"
    },
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
