import React from "react";
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Link, Switch, Route } from "react-router-dom";
import Home from './home'; 
import Movies from './movies/movies'
import SelectMovie from './movies/Select'

const App = () => (
  <div>
    <nav>

      <Link to='/'>Home</Link> 
      {" "}
      <Link to='/movies'>Movies</Link>
      {" "}
      <Link to = '/genre'>Genre</Link>

    </nav>
    
    <Switch>
    <Route  exact path ='/' component = {Home}/>
    <Route path = '/movies' component= {Movies}/> 
    <Route path='/genre' component={SelectMovie}/>
    </Switch>

  </div>
);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
