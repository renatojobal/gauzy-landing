import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import NotFound from '../pages/not_found/NotFound';
import Root from '../pages/root/Root'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Root} />
        <Route exact path="/404" component={NotFound} />
        <Redirect from="*" to="/404"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
