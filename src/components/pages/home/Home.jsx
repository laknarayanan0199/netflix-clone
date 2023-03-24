import Layout from "../../../layout/Layout";
import requests from "../../../Requests";
import Banner from "../../Banner";
import Row from "../../Row";

const Home = () => {
  return (
    <Layout>
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Netflix Originals" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
    </Layout>
  );
};

export default Home;
