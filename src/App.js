import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/pages/home/Home";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/logIn/Login";
import MyList from "./components/pages/my-list/MyList";
import Details from "./components/pages/Details/Details";
import Movies from "./components/pages/movies/Movies";
import Series from "./components/pages/series/Series";
import Layout from "./layout/Layout";

function App() {
  const isAuthenticated = localStorage.getItem("isAuth");

  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {isAuthenticated && (
          <>
            <Route path="home" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="/:id" element={<Details />} />
            <Route path="series" element={<Series />} />
            <Route path="my-list" element={<MyList />} />
            <Route path="*" element={<Navigate to={"/home"} />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
