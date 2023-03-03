import { Add } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listActions } from "../../../store/listSlice";
import Card from "../../UI/Card";
import "./movies.css";

const Movies = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  const imgBaseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())

      .then((mov) => {
        setMovies(mov.results);
      });
  }, [fetchUrl]);

  const addToList = (movie) => {
    dispatch(listActions.addToMyList(movie));
  };

  return (
    <div className="movies">
      <h2> {title}</h2>
      <ul className="movie__lists">
        {movies.map((movie) => (
          <Card>
            <li key={movie.id} className="list">
              <div className="movie">
                <img
                  src={`${imgBaseURL}${movie.backdrop_path}`}
                  alt={movie.original_title}
                />
                <h4>{movie.original_title}</h4>
              </div>
              <div className="action-btns">
                <button className="action-btn">Play</button>
                <button
                  className="action-btn"
                  onClick={() => {
                    addToList(movie);
                    console.log(movie);
                  }}
                >
                  <Add /> My List
                </button>
              </div>
            </li>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
