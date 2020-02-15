import React from "react";
import Nav from "./components/NavMenu/navmenu";
import "./App.css";
import Home from "./components/HomePage/homepage";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
