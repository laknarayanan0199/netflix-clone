import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "@mui/icons-material";
import StarRateIcon from "@mui/icons-material/StarRate";

import { listActions } from "../../../store/listSlice";
import "./details.css";
import Navbar from "../../Navbar";

const Detail = () => {
  const movie = useSelector((state) => state.results.data);

  const dispatch = useDispatch();

  const { id } = useParams();

  const Detail = movie.filter((movie) => movie.id === Number(id))[0];

  const addToList = (data) => {
    dispatch(listActions.addToMyList(data));
  };

  return (
    <>
      <Navbar />
      <div className="movie__banner">
        <div className="movie__image">
          <img
            src={`https://image.tmdb.org/t/p/original//${Detail.backdrop_path}`}
            alt="data_image"
          />
        </div>
        <div key={Detail.id} className="movie__contents">
          <h1 className="movie__title">
            {Detail?.name || Detail?.title || Detail?.original_name}
          </h1>
          <div className="action__buttons">
            <button
              className="action__button"
              onClick={() => addToList(Detail)}
            >
              <Add /> My List
            </button>
          </div>
        </div>
        <div className="details">
          Release Date:
          <span>{Detail?.first_air_date || Detail?.release_date}</span> |
          <span>
            <StarRateIcon className="icons" />
          </span>{" "}
          {Detail?.vote_average}
        </div>
        <h1 className="movie__description">
          Overview <br />
          {Detail?.overview}
        </h1>
      </div>
    </>
  );
};

export default Detail;
