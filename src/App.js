import React from 'react';
import { Route } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import './App.css';
import Navbar from './components/Navbar';


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

        <Navbar />
        <div>navbar</div>
        <div>header</div>
        <div>portfolio</div>
      </ThemeProvider>
    </>
  )
}

export default App;
