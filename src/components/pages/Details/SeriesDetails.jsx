import React from "react";
import Navbar from "../../home/Navbar";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "@mui/icons-material";
import StarRateIcon from "@mui/icons-material/StarRate";
import { listActions } from "../../../store/listSlice";
import "./seriesdetails.css";

const SeriesDetail = () => {
  const series = useSelector((state) => state.movies.series);

  const dispatch = useDispatch();

  const { id } = useParams();

  const seriesDetail = series.filter((series) => series.id === Number(id))[0];

  const addToList = (data) => {
    dispatch(listActions.addToMyList(data));
  };

  return (
    <div className="series__banner">
      <Navbar />
      <div className="series__image">
        <img
          src={`https://image.tmdb.org/t/p/original//${seriesDetail.backdrop_path}`}
          alt="data_image"
        />
      </div>
      <div key={seriesDetail.id} className="series__contents">
        <h1 className="series__title">
          {seriesDetail?.name ||
            seriesDetail?.title ||
            seriesDetail?.original_name}
        </h1>
        <div className="details">
          Release Date:
          <span>{seriesDetail?.first_air_date}</span> |
          <span>
            <StarRateIcon className="icons" />
          </span>{" "}
          {seriesDetail?.vote_average}
        </div>
        <br />
        <div className="action__buttons">
          <button className="banner__button">Play</button>
          <button
            className="action__button"
            onClick={() => addToList(seriesDetail)}
          >
            <Add /> My List
          </button>
        </div>
      </div>
      <h1 className="series__description">
        Overview <br />
        {seriesDetail?.overview}
      </h1>
    </div>
  );
};

export default SeriesDetail;
