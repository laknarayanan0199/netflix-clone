import { Add } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import requests from "../../Requests";
import { listActions } from "../../store/listSlice";
import "./banner.css";

const Contents = ({fetchUrl}) => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())

      .then((response) => {
        setMovies(response.results);
      });
  }, [fetchUrl]);

  const addToList = (series) => {
    dispatch(listActions.addToMyList(series));
  };

  return (
    <header className="banner">
      <ul className="banner_lists">
        {movies.map((movie) => (
          <li className="banner__list" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/original//${movie.backdrop_path}`}
              alt="movie_image"
            />
            <div className="banner__contents">
              <h1 className="banner__title">
                {movie?.name || movie?.title || movie?.original_name}
              </h1>
              <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button
                  className="banner__button"
                  onClick={() => addToList(movie)}
                >
                  <Add /> My List
                </button>
              </div>
              <h1 className="banner__description">{movie?.overview}</h1>
            </div>
          </li>
        ))}
      </ul>

      {/* <div className="banner--fadeBottom" /> */}
    </header>
  );
};

export default Contents;
