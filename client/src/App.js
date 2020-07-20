import React from "react";
import Search from "./pages/Search";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

import Login from "./components/Login";
import AuthComp from "./components/AuthComp";
import Protected from "./components/Protected";

import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/dist/lux/bootstrap.css";
import { Button } from "reactstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar>HabteJ Bookshelf</NavBar>
        {/* 

        <Route path="/" exact component={Search} />
        <Route path="/Home" exact component={Home} /> */}
        {/* <Route path="/auth" component={AuthComp}/> */}
        <Switch>
          <Route path="/Login" exact component={Login} />
          <AuthComp>
            <Route path="/Protected" component={Protected} />
          </AuthComp>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
