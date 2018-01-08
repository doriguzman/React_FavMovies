import React from 'react';

import { Route, Switch , Link} from 'react-router-dom';
import moviesapi from './moviesapi'
import MovieList from './movieList'
import Movie from './movie'

class Movies extends React.Component {

  constructor (){
    super();
    this.state= {
      movieRatings : []
      
    }
  }


  renderRating = event=>{
    const movieID= event.target.name
    
  }



  renderMovieDetails = props => {
    const { id } = props.match.params;
    const movieDetails = moviesapi.getOne(id);
    console.log(movieDetails)
    return (
      <Movie movie = {movieDetails} />
    )
  }


  renderMovieList = () => {
    const movies = moviesapi.getAll();
    return (
      <MovieList movies={movies} />
    )
  }


  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/movies' render={this.renderMovieList} />
          <Route exact path='/movies/:id' render={this.renderMovieDetails} />
          <Route exact path='/movies/selected/:genre' render={this.renderMovieDetails} />
 
        </Switch>
      </div>
    )
  }
}


export default Movies