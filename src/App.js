import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/home/Home";
import Register from "./components/pages/register/Register";
import Movies from "./components/pages/movies/Movies";
import Series from "./components/pages/series/Series";
import SignIn from "./components/pages/signIn/SignIn";
import MyList from "./components/pages/my-list/MyList";
import requests from "./Requests";
import Navbar from "./components/home/Navbar";
import Banner from "./components/home/Banner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<SignIn />} />
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
        <Route path="/movies/:id" element={<Movies />} />
        <Route
          path="/series"
          element={
            <>
              <Navbar />
              <Banner
                title="Netflix Originals"
                fetchUrl={requests.fetchNetflixOriginals}
              />
              {/* <Series title="This Year Release" fetchUrl={requests.thisYear} /> */}
              <Series title="Drama" fetchUrl={requests.fetchDrama} />
            </>
          }
        />
        <Route path="/series/:id" element={<Series />} />
        <Route path="/my-list" element={<MyList />} />
      </Route>
    </Routes>
  );
}

export default App;
