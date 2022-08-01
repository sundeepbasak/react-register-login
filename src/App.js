import Register from "./components/Register";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
