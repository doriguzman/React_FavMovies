import React from "react";

import { Route, Switch, Link } from "react-router-dom";
import moviesapi from "./moviesapi";
import MovieList from "./movieList";
import Movie from "./movie";
import SelectMovie from "./Select"

class Movies extends React.Component {
  constructor() {
    super();
    this.ratings = ['', '*', '**', '***', '****', '*****']
    this.state = {
      movieRatings: [],
      movieRate: ''
    };
  }

  changeRate = e => {
    this.setState({
      movieRate: e.target.value
    })
  }


  renderRating = event => {
    const { movieRatings } = this.state;

    const movieID = event.target.name;
    const movieRating = event.target.value;
    const movie = movieRatings.find(
      movie => movie.id === movieID
    );
    if (!movie) {
      const movie = moviesapi.getOne(movieID);
      const selectedMovie = {
        ...movie,
        rating: movieRating
      };
      console.log(selectedMovie);
      this.setState({
        movieRatings: [...movieRatings, selectedMovie]
      });
    } else {
      const editMovieRating = movieRatings.map(movie => {
        if (movie.id === movieID) {
          return { ...movie, rating: movieRating };
        } else {
          return movie;
        }
      });
      this.setState({
        movieRatings: editMovieRating
      });
    }
  };

  renderMovieDetails = props => {
    const { id } = props.match.params;
    const movieDetails = moviesapi.getOne(id);
    const { movieRatings } = this.state;
    const localMovie = movieRatings.find(
      movie => movie.id === id
    );
    const rating = localMovie ? localMovie.rating : "";

    return (
      <Movie
        rating={rating}
        movie={movieDetails}
        renderRating={this.renderRating}
      />
    );
  };

  renderMovieList = () => {
    const movies = moviesapi.getAll();
    return <MovieList movies={movies} />;
  };

  renderFilteredRatings = () => {
    const { movieRate, movieRatings } = this.state
    const ratingFilter = rating =>
      movieRatings.filter(movie => movie.rating === rating)

    const filteredRatings = ratingFilter(movieRate)
    return (
      <div>
        Pick movies by ratings {" "}
        <select value={movieRate} onChange={this.changeRate}>
          {this.ratings.map((rating) =>
            <option value={rating}>{rating} </option>
          )}
        </select>

        {movieRate ? <MovieList movies={filteredRatings} /> : ''}
      </div>
    )
  }

  render() {
    console.log(this.state);
    return (
      <div>
        
          <Route
            exact
            path="/movies"
            render={this.renderMovieList}
          />
          <Route
            exact
            path="/movies/genre"
            component={SelectMovie}
          />

          <Route
            exact
            path="/movies/one/:id"
            render={this.renderMovieDetails}
          />

          <Route exact
            path="/movies/ratings"
            render={this.renderFilteredRatings}
          />

        
      </div>
    );
  }
}

export default Movies;
