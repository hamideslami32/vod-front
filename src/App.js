import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Watch from "./pages/watch/Watch";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

import "./app.scss";

function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="home" />}

          <Register />
        </Route>
        <Route path="/login">
          {!user ? <Login /> : <Redirect to="home" />}

          <Login />
        </Route>
        {user && (
          <>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/movies">
              <Home type="movies" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
