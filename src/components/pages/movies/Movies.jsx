import React from "react";
import Banner from "../../Banner";
import requests from "../../../Requests";
import Row from "../../Row";
import Layout from "../../../layout/Layout";

const Movies = () => {
  return (
    <Layout>
      <Banner fetchUrl={requests.fetchActionMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
    </Layout>
  );
};

export default Movies;
