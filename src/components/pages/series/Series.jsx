import { Add } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { listActions } from "../../../store/listSlice";
import Card from "../../UI/Card";
import "./series.css";

const Series = ({ title, fetchUrl }) => {
  const [series, setSeries] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const imgBaseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Series Not Found");
        }
        return res.json();
      })
      .then((series) => {
        setSeries(series.results);
      });
  }, [fetchUrl]);

  const addToList = (ser) => {
    dispatch(listActions.addToMyList(ser));
    console.log(ser);
  };

  const navi = (id) => {
    navigate(`/series/${id}`);
    console.log(id);
  };

  return (
    <div className="series">
      <h2> {title}</h2>
      <ul className="series__lists">
        {series.map((ser) => (
          <Card>
            <li
              key={ser.id}
              className="list"
              onClick={() => {
                navi(ser.id);
                console.log(ser.id);
              }}
            >
              <div className="series__list">
                <img
                  src={`${imgBaseURL}${ser.backdrop_path}`}
                  alt={series.original_title}
                />
                <h4>{ser.original_name}</h4>
              </div>
              <div className="action-btns">
                <button className="action-btn">Play</button>
                <button className="action-btn" onClick={() => addToList(ser)}>
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

export default Series;

// id: series.id,
// title: series.original_title,
// description: series.overview,
