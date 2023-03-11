import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/pages/home/Home";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/logIn/Login";
import MyList from "./components/pages/my-list/MyList";
import SeriesDetail from "./components/pages/Details/SeriesDetails";
import MovieDetail from "./components/pages/Details/MovieDetails";
import Movie from "./components/movie";
import Series from "./components/series";

function App() {
  const isAuthenticated = localStorage.getItem("isAuth");

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {isAuthenticated && (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/series" element={<Series />} />
          <Route path="/series/:id" element={<SeriesDetail />} />
          <Route path="/my-list" element={<MyList />} />
        </>
      )}
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
