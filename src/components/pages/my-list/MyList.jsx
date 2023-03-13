import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { listActions } from "../../../store/listSlice";
import Card from "../../UI/Card";
// import "../../row.css";
import "./myList.css";

const MyList = () => {
  const list = useSelector((state) => state.myList.list);

  console.log(list);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const imgBaseURL = "https://image.tmdb.org/t/p/original/";

  const remove = (removeId) => {
    console.log(removeId);
    dispatch(listActions.removeFromList(removeId));
  };

  const navi = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className="watchlist">
      <h2>Watch List</h2>
      <div className="lists">
        {list.length > 0 ? (
          list.map((list) => (
            <Card key={list.id}>
              <div className="list">
                <div className="data">
                  <img
                    src={`${imgBaseURL}${list.backdrop_path}`}
                    alt={list.original_title}
                    onClick={() => navi(list.id)}
                  />
                  <h4>{list?.name || list?.title || list?.original_name}</h4>
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
              </div>
            </Card>
          ))
        ) : (
          <h3>No Movies and Series Found</h3>
        )}
      </div>
    </div>
  );
};

export default MyList;
