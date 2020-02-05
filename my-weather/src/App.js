// Base imports

import React from 'react';
import './App.css';
// Components imports

import Opening from './components/Opening';
// React Router imports

import { Route } from 'react-router-dom';
// Material UI imports

import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';


const openingtheme = createMuiTheme({
  typography: {
    fontFamily: [
    'Handlee, cursive'
    ]
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={openingtheme}>
        <Route path='/' component={Opening} />
      </ThemeProvider>
    </div>
  );
}

export default App;
