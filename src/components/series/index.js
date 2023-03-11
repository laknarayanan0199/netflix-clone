import React from "react";
import requests from "../../Requests";
import Contents from "../Banner";
import Navbar from "../Navbar";

const Series = () => {
  return (
    <>
      <Navbar />
      <Contents title="Netflix Originals" fetchUrl={requests.fetchTrending} />
      <Series
        title="This Year Release"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Series title="Drama" fetchUrl={requests.fetchDrama} />
    </>
  );
};

export default Series;
