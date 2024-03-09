import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";
export const MovieDetails = ({ movieData }) => {
  const { movieId } = useParams();
  const findMovie = movieData.find((movie) => movie.id == movieId);
  console.log(findMovie);
  return (
    <div>
      <h1>{findMovie.title}</h1>
      <img src={findMovie.posterurl} alt="poster URL" />
      <p> {findMovie.description}</p>
      <p> Rating : {findMovie.rating}</p>
      <iframe
        width="560"
        height="315"
        src={findMovie.trailer}
        title={findMovie.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};
