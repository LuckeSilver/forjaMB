import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Evolucao from "./pages/Evolucao";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/evolucao" component={Evolucao} />
      </Switch>
    </BrowserRouter>
  );
}
