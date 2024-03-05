import React, { useState } from "react";
import MovieList from "./MovieList";
import "./style.css";

const Filter = ({ ratingChange, SearchInput, movieData }) => {
  // Filter movies based on search input and rating change
  const filtredMovie = movieData.filter(
    (movie) =>
      movie.title.toLowerCase().includes(SearchInput.toLowerCase()) &&
      movie.rating >= ratingChange
  );

  return (
    <div>
      <MovieList filtredMovie={filtredMovie} />
    </div>
  );
};

export default Filter;
