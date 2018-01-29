import React from 'react';
import render from 'react-dom'
import { Link, Route } from 'react-router-dom';
import moviesapi from './moviesapi'
import MovieList from './movieList'




class Select extends React.Component {
  render() {
    const { values, selectedValue, handleChange } = this.props
    const displayValues = ['', ...values];
    return (
      <select value={selectedValue} onChange={handleChange}>
        {displayValues.map((genre) =>
          <option value={genre}>{genre} </option>
        )}
      </select>
    )
  }
}

class SelectMovie extends React.Component {
  constructor() {
    super();
   
    this.state = {
      genre: '',
    }
  }


  handleSelection = (e) => {
    this.setState({
      genre: e.target.value
    })
  }


  render() {
    const { genre } = this.state
    const movieGenres= moviesapi.getMovieGenres()
    console.log(movieGenres)
    const renderMovieGenre= moviesapi.genreFilter(genre)
    //gives back the array of movies filtered by the genre
    console.log(renderMovieGenre)
    
    

    return (
      <div>
        <p>
          Pick a movie genre: {' '}
          <Select values={movieGenres} selectedValue={genre} handleChange={this.handleSelection} />
          <MovieList movies = {renderMovieGenre} />
          
        </p>
      </div>
    )
  }
}



export default SelectMovie