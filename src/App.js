import "./App.css";
import SignU from "./components/SignU";
import Login from "./components/Login";
import { Redirect, Route, Switch } from "react-router-dom";
import Wellcome from "./components/Wellcome";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/welcome" component={Wellcome}/>
        <Route path="/sign up" component={SignU} />
        <Route path="/login" component={Login} />
        <Redirect from="/" to="/sign up"/>
      </Switch>
    </div>
  );
}

export default App;
