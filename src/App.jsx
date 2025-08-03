import { Routes, Route } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Cast from "./components/Cast";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<SearchPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
