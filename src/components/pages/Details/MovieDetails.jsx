import React from "react";
import Navbar from "../../home/Navbar";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const movies = useSelector((state) => state.movies.movies);
  console.log("From movie details", movies);

  const { id } = useParams();

  const movieDetails = movies.filter((movie) => movie.id === Number(id))[0];
  console.log("movieDetails", movieDetails);

  return (
    <div>
      <Navbar />
      <h1>{movieDetails.original_title}</h1>
    </div>
  );
};

export default MovieDetails;
