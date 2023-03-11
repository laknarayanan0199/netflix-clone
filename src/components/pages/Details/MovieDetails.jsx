import React from "react";
import Navbar from "../../Navbar";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "@mui/icons-material";
import StarRateIcon from "@mui/icons-material/StarRate";

import { listActions } from "../../../store/listSlice";
import "./moviedetails.css";

const MovieDetail = () => {
  const movie = useSelector((state) => state.movies.movies);

  const dispatch = useDispatch();

  const { id } = useParams();

  const movieDetail = movie.filter((movie) => movie.id === Number(id))[0];

  const addToList = (data) => {
    dispatch(listActions.addToMyList(data));
  };

  return (
    <div className="movie__banner">
      <Navbar />
      <div className="movie__image">
        <img
          src={`https://image.tmdb.org/t/p/original//${movieDetail.backdrop_path}`}
          alt="data_image"
        />
      </div>
      <div key={movieDetail.id} className="movie__contents">
        <h1 className="movie__title">
          {movieDetail?.name ||
            movieDetail?.title ||
            movieDetail?.original_name}
        </h1>
        <div className="details">
          Release Date:
          <span>
            {movieDetail?.first_air_date || movieDetail?.release_date}
          </span>{" "}
          |
          <span>
            <StarRateIcon className="icons" />
          </span>{" "}
          {movieDetail?.vote_average}
        </div>
        <br />
        <div className="action__buttons">
          <button className="banner__button">Play</button>
          <button
            className="action__button"
            onClick={() => addToList(movieDetail)}
          >
            <Add /> My List
          </button>
        </div>
      </div>
      <h1 className="movie__description">
        Overview <br />
        {movieDetail?.overview}
      </h1>
    </div>
  );
};

export default MovieDetail;
