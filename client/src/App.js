import React from "react";
import Search from "./pages/Search";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar>HabteJ Bookshelf</NavBar>

        <Route path="/" exact component={Search} />
        <Route path="/Home" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
