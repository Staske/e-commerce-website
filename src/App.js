import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const ShoesPage = () => (
  <div>
    <h1>SHOES PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shoes" component={ShoesPage} />
      </Switch>
    </div>
  );
}

export default App;
