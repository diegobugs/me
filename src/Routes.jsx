import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { LandingPage, SkillsPage } from "./views";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/skills">
        <SkillsPage />
      </Route>
      <Route path="*" render={() => <Redirect to={"/"} />} />
    </Switch>
  );
}

export default Routes;
