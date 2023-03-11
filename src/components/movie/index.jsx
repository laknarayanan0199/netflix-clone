import React from "react";
import requests from "../../Requests";
import Banner from "../Banner";

import Navbar from "../Navbar";
import Movies from "../pages/movies/Movies";

const Movie = () => {
  return (
    <>
      <Navbar />
      <Banner fetchUrl={requests.fetchActionMovies} />
      <Movies title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Movies title="Comedy" fetchUrl={requests.fetchComedyMovies} />
    </>
  );
};

export default Movie;
