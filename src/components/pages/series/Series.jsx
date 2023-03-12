import React from "react";
import requests from "../../../Requests";
import Banner from "../../Banner";
import Row from "../../Row";

const Series = () => {
  return (
    <>
      <Banner title="Netflix Originals" fetchUrl={requests.fetchTrending} />
      <Row
        title="This Year Release"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
    </>
  );
};

export default Series;
