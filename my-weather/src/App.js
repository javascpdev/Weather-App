// Base imports
import React from "react";
import "./App.css";
// Components imports
import Opening from "./components/Opening";
import Dashboard from "./components/Dashboard";
// React Router imports
import { Route } from "react-router-dom";
// Material UI imports
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import ExtendedFcst from "./components/ExtendedFcst";

const openingtheme = createMuiTheme({
  typography: {
    fontFamily: ["Handlee, cursive"]
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={openingtheme}>
        <Route exact path="/" component={Opening} />
      </ThemeProvider>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/fiveday" component={ExtendedFcst} />
    </div>
  );
}

export default App;
