import requests from "../../Requests";
import Movies from "../pages/movies/Movies";
import Series from "../pages/series/Series";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Series title="Netflix Originals" fetchUrl={requests.fetchTrending} />
      <Series title="Drama" fetchUrl={requests.fetchDrama} />
      <Movies title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Movies title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Movies title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Series title="This Year Release" fetchUrl={requests.fetchthisYear} />
    </>
  );
};

export default Home;
