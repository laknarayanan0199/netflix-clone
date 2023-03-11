import { Add } from "@mui/icons-material";
import StarRateIcon from "@mui/icons-material/StarRate";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
// import requests from "../../Requests";
import { listActions } from "../store/listSlice";
import "./banner.css";

const Contents = ({ fetchUrl }) => {
  const [data, setData] = useState([]); //Data coulde be either series or movies.

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const moviesfromSlice = useSelector((state) => state.movies.movies);

  const seriesfromSlice = useSelector((state) => state.movies.series);

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())

      .then((response) => {
        setData(response.results);
      });
  }, [fetchUrl]);

  const addToList = (data) => {
    dispatch(listActions.addToMyList(data));
  };

  const navi = (id) => {
    const moviesPage = moviesfromSlice.filter(
      (movie) => movie.id === Number(id)
    )[0];
    const seriesPage = seriesfromSlice.filter(
      (series) => series.id === Number(id)
    )[0];

    if (moviesPage) {
      navigate(`/movies/${id}`);
    } else if (seriesPage) {
      navigate(`/series/${id}`);
    }
  };

  return (
    <header className="banner">
      <div className="banner_lists">
        {data.map((data) => (
          <div
            key={data.id}
            className="banner__list"
            onClick={() => {
              navi(data.id);
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/original//${data.backdrop_path}`}
              alt="data_image"
            />
            <div className="banner__contents">
              <h1 className="banner__title">
                {data?.name || data?.title || data?.original_name}
              </h1>
              <div className="details">
                Release Date:
                <span>{data?.first_air_date}</span> |
                <span>
                  <StarRateIcon className="icons" />
                </span>{" "}
                {data?.vote_average}
              </div>
              <br />
              <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button
                  className="banner__button"
                  onClick={() => addToList(data)}
                >
                  <Add /> My List
                </button>
              </div>
              <h1 className="banner__description">{data?.overview}</h1>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Contents;
