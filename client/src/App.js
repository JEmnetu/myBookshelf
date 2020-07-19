import React from "react";
import Search from "./pages/Search";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

import Login from "./components/Login";
import AuthComp from "./components/AuthComp";

import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/dist/lux/bootstrap.css";
import { Button } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar>HabteJ Bookshelf</NavBar>

        <Route path="/" exact component={Search} />
        <Route path="/Home" exact component={Home} /> */}
        {/* <Route path="/auth" component={AuthComp}/> */}
        <Route path="/" exact component={Login} />
      </Router>
    </div>
  );
}

export default App;
