import { Add } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { listActions } from "../../../store/listSlice";
import { movieActions } from "../../../store/movieSlice";
import Card from "../../UI/Card";
import "./movies.css";

const Movies = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const imgBaseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())

      .then((mov) => {
        setMovies(mov.results);
        dispatch(movieActions.addMovies(mov.results));
      });
  }, []);

  const addToList = (movie) => {
    dispatch(listActions.addToMyList(movie));
  };

  const navi = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="movies">
      <h2> {title}</h2>
      <div className="movie__lists">
        {movies.map((movie) => (
          <Card>
            <div key={movie.id} className="list">
              <div
                className="movie"
                onClick={() => {
                  navi(movie.id);
                }}
              >
                <img
                  src={`${imgBaseURL}${movie?.backdrop_path}`}
                  alt={movie?.original_title || movie?.title}
                />
                <h4>{movie?.name || movie?.title || movie?.original_name}</h4>
              </div>
              <div className="action-btns">
                <button className="action-btn">Play</button>
                <button
                  className="action-btn"
                  onClick={() => {
                    addToList(movie);
                  }}
                >
                  <Add /> My List
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Movies;
