import requests from "../../Requests";
import Movies from "../pages/movies/Movies";
import Series from "../pages/series/Series";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Series
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Movies title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Movies title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Movies title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
    </>
  );
};

export default Home;

// const user = useSelector((state) => state.user.user);

// console.log(user);

// const [movies, setMovies] = useState([]);

// // const baseURL = "https://api.themoviedb.org/3/";

// useEffect(() => {
//   fetch(`${requests.fetchNetflixOriginals}`)
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("Page Not Found");
//       } else return res.json();
//     })
//     .then((mov) => {
//       setMovies(mov.results);
//       console.log(mov.results);
//     });
// }, []);
// <div>
//   <h1>{user.email}</h1>
//   <h3>Featured</h3>
//   <div>
//     {movies.map((mov) => (
//       <li>
//         <img
//           src={`https://image.tmdb.org/t/p/original/${mov.backdrop_path}`}
//           alt={mov.name}
//         />
//         <h3>{mov.name}</h3>
//       </li>
//     ))}
//   </div>
// </div>
