import { Route, Switch } from "react-router-dom";
import "./App.css";
import { LandingPage, SkillsPage } from "./views";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/skills">
        <SkillsPage />
      </Route>
    </Switch>
  );
}

export default App;
