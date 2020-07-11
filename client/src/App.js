import React from "react";
import Search from "./pages/Search";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <h1 style={{ textAlign: "center" }}>HabteJ Bookshelf</h1>
        <div id="nav-btns">
          <Link to="/Home">
            <Button color="dark">My Books</Button>
          </Link>{" "}
          <Link to="/">
            <Button color="dark">Search</Button>
          </Link>
        </div>
        <Route path="/" exact component={Search} />
        <Route path="/Home" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
