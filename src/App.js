import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./components/navbar";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ab" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
