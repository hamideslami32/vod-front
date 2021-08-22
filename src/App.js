import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Watch from "./pages/watch/Watch";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

import "./app.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/series">
          <Home type="series" />
        </Route>
        <Route path="/movies">
          <Home type="movies" />
        </Route>
        {/* <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route> */}
        <Route exact path="/watch">
          <Watch />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
