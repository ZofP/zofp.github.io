import React from 'react';
import { Route } from "react-router-dom"
import {
  CssBaseline,

} from '@material-ui/core/'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import './App.css';
import Homepage from './pages/Homepage';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#AF0001",
    },
    secondary: {
      main: "#B0BEC5",
    },
  },
});



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Homepage />
      </ThemeProvider>
    </>
  )
}

export default App;
