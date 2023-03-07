import { Add } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import requests from "../../Requests";
import { listActions } from "../../store/listSlice";
import "./banner.css";

const Contents = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())

      .then((response) => {
        setMovies(response.results);
      });
  }, [fetchUrl]);
  console.log(movies);

  const addToList = (series) => {
    dispatch(listActions.addToMyList(series));
  };

  return (
    <header className="banner">
      <div className="banner_lists">
        {movies.map((movie) => (
          <div key={movie.id} className="banner__list">
            <img
              src={`https://image.tmdb.org/t/p/original//${movie.backdrop_path}`}
              alt="movie_image"
            />
            <div className="banner__contents">
              <h1 className="banner__title">
                {
                  // movie?.name || movie?.title ||
                  movie?.original_name
                }
              </h1>
              {/* <h4>IMdb {movie?.vote_average}</h4> */}
              <br/>
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
          </div>
        ))}
      </div>

      {/* <div className="banner--fadeBottom" /> */}
    </header>
  );
};

export default Contents;
