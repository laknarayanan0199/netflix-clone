import { Add } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { listActions } from "../store/listSlice";
import { movieActions } from "../store/movieSlice";
import Card from "./UI/Card";
import "./row.css";

const Row = ({ title, fetchUrl }) => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const imgBaseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())

      .then((response) => {
        setData(response.results);
        dispatch(movieActions.addData(response.results));
      });
  }, []);

  const addToList = (data) => {
    dispatch(listActions.addToMyList(data));
  };

  const navi = (id) => {
    navigate(`/${id}`);
  };
  return (
    <div className="row">
      <h2> {title}</h2>
      <div className="row__lists">
        {data.map((data) => (
          <Card key={data.id}>
            <div className="list">
              <div
                className="data"
                onClick={() => {
                  navi(data.id);
                }}
              >
                <img
                  src={`${imgBaseURL}${data?.backdrop_path}`}
                  alt={data?.original_title || data?.title}
                />
                <h4>{data?.name || data?.title || data?.original_name}</h4>
              </div>
              <div className="action-btns">
                <button className="action-btn">Play</button>
                <button
                  className="action-btn"
                  onClick={() => {
                    addToList(data);
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

export default Row;
