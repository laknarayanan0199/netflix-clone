import React from "react";
import Layout from "../../../layout/Layout";
import requests from "../../../Requests";
import Banner from "../../Banner";
import Row from "../../Row";

const Series = () => {
  return (
    <Layout>
      <Banner title="Netflix Originals" fetchUrl={requests.fetchTrending} />
      <Row
        title="This Year Release"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
    </Layout>
  );
};

export default Series;
