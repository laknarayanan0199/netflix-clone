import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { listActions } from "../../../store/listSlice";
import Card from "../../UI/Card";
import "../series/series.css";

const MyList = () => {
  const list = useSelector((state) => state.myList.list);
  const dispatch = useDispatch();
  console.log(list, "jjjej");

  const imgBaseURL = "https://image.tmdb.org/t/p/original/";

  const remove = (removeId) => {
    dispatch(listActions.removeFromList(removeId));
  };

  return (
    <div className="series">
      <h2>Watch List</h2>
      <ul className="series__lists">
        {list.length > 0 ? (
          list.map((list) => (
            <Card>
              <li key={list.id} className="list">
                <div className="series__list">
                  <img
                    src={`${imgBaseURL}${list.backdrop_path}`}
                    alt={list.original_title}
                  />
                  <h4>{list.original_name}</h4>
                </div>
                <div className="action-btns">
                  <button className="action-btn">Play</button>
                  <button
                    className="action-btn"
                    onClick={() => {
                      remove(list.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            </Card>
          ))
        ) : (
          <h3>No Movies and Series Found</h3>
        )}
      </ul>
    </div>
  );
};

export default MyList;
