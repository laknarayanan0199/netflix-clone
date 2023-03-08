import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/home/Home";
import Register from "./components/pages/register/Register";
import Movies from "./components/pages/movies/Movies";
import Series from "./components/pages/series/Series";
import SignIn from "./components/pages/logIn/SignIn";
import MyList from "./components/pages/my-list/MyList";
import requests from "./Requests";
import Navbar from "./components/home/Navbar";
import Banner from "./components/home/Banner";
import SeriesDetail from "./components/pages/Details/SeriesDetails";
import MovieDetail from "./components/pages/Details/MovieDetails";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (localStorage.getItem(user.email, user.password)) {
  
      setIsAuthenticated(true);
    }
    return;
  }, []);

  const loginHandler = (email, password) => {
    setIsAuthenticated(true);
  };

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<SignIn loginHandler={loginHandler} />} />
      {isAuthenticated && (
        <Route>
          <Route path="/home" element={<Home />} />
          <Route
            path="/movies"
            element={
              <>
                <Navbar />
                <Banner fetchUrl={requests.fetchActionMovies} />
                <Movies title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Movies title="Comedy" fetchUrl={requests.fetchComedyMovies} />
              </>
            }
          />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route
            path="/series"
            element={
              <>
                <Navbar />
                <Banner
                  title="Netflix Originals"
                  fetchUrl={requests.fetchTrending}
                />
                <Series
                  title="This Year Release"
                  fetchUrl={requests.fetchNetflixOriginals}
                />
                <Series title="Drama" fetchUrl={requests.fetchDrama} />
              </>
            }
          />
          <Route path="/series/:id" element={<SeriesDetail />} />
          <Route path="/my-list" element={<MyList />} />
        </Route>
      )}
      <Route path="/*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
}

export default App;
