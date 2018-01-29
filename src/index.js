import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./home";
import Movies from "./movies/movies";


const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="/movies">Favorite Movies</Link>{" "}
      <Link to="/movies/genre">Genre</Link>{" "}
      <Link to="/movies/ratings">Your Movie Ratings </Link>
    </nav>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movies" component={Movies} />
    </Switch>
  </div>
);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
