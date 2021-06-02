import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import NotFound from "../not_found/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/404" component={NotFound} />
        <Redirect from="*" to="/404"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
