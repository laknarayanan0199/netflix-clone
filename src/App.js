import { Navigate, Route, Routes, useNavigate } from "react-router";
import Home from "./components/pages/home/Home";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/logIn/Login";
import MyList from "./components/pages/my-list/MyList";
import Details from "./components/pages/Details/Details";
import Movies from "./components/pages/movies/Movies";
import Series from "./components/pages/series/Series";

function App() {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("isAuth");

  const onLogin = () => {
    navigate("/home");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login loginHandler={onLogin} />} />
        {isAuthenticated && (
          <>
            <Route path="home" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="details/:id" element={<Details />} />
            <Route path="series" element={<Series />} />
            <Route path="my-list" element={<MyList />} />
            <Route path="*" element={<Navigate to={"home"} />} />
          </>
        )}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
