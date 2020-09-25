import React from 'react';
import { Route } from "react-router-dom"
import {
  CssBaseline,

} from '@material-ui/core/'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import './App.css';

import Homepage from './pages/Homepage';
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";



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
        <CssBaseline />
        <Route exact path="/" component={Homepage} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contacts" component={Contact} />
      </ThemeProvider>
    </>
  )
}

export default App;
