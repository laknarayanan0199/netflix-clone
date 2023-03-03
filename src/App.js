import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/home/Home";
import Register from "./components/pages/register/Register";
import Movies from "./components/pages/movies/Movies";
import Series from "./components/pages/series/Series";
import SignIn from "./components/pages/signIn/SignIn";
import MyList from "./components/pages/my-list/MyList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<SignIn />} />
      <Route>
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/series/:id" element={<Series />} />
        <Route path="/my-list" element={<MyList />} />
      </Route>
    </Routes>
  );
}

export default App;
