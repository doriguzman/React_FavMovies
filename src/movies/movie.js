import React from "react";
import { Link } from "react-router-dom";

class Select extends React.Component {
  render() {
    const {
      name,
      values,
      selectedValue,
      handleChange
    } = this.props;
    const displayValues = ["", ...values];
    return (
      <select
        name={name}
        value={selectedValue}
        onChange={handleChange}
      >
        {displayValues.map(rating => (
          <option value={rating}>{rating} </option>
        ))}
      </select>
    );
  }
}

class Movie extends React.Component {
  constructor() {
    super();

    this.state = {
      ratingValues: ["*", "**", "***", "****", "*****"]
    };
  }

  // handleSelection = (e) => {
  //   this.setState({
  //     rating: e.target.value
  //   })
  // }
  render() {
    const { movie, renderRating , rating} = this.props;

    return (
      <div>
        <p>
          <h2> {movie.title}</h2>
          <h3>
            <p>
              {" "}
              Please rate this movie{" "}
              <Select
                name={movie.id}
                selectedValue={rating}
                values={this.state.ratingValues}
                handleChange={renderRating}
              />
            </p>
            <p> Year: {movie.year} </p>
            <p> Genres: {movie.genre.join(", ")} </p>
            <p>Director:{movie.director} </p>
            <p>Actors: {movie.actors} </p>
            <p>
              <img src={movie.img} alt="img" />{" "}
            </p>
            <p>
              <a href={movie.website}>
                {" "}
                {movie.title} (IMDB){" "}
              </a>
            </p>
          </h3>
        </p>
        <h4>
          <Link to="/movies"> back </Link>
        </h4>
      </div>
    );
  }
}

export default Movie;
