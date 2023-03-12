import React from "react";
import Banner from "../../Banner";
import requests from "../../../Requests";
import Row from "../../Row";

const Movies = () => {
  return (
    <>
      <Banner fetchUrl={requests.fetchActionMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
    </>
  );
};

export default Movies;
