import React from "react";
import Search from "./pages/Search";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/Search" exact component={Search} />
      </Router>
    </div>
  );
}

export default App;
