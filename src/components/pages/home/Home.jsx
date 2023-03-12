import requests from "../../../Requests";
import Banner from "../../Banner";
import Row from "../../Row";

const Home = () => {
  return (
    <>
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Netflix Originals" fetchUrl={requests.fetchTrending} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
    </>
  );
};

export default Home;
