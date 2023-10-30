import Movies from 'page/Movies';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from 'page/MovieDetailsPage';
import Home from 'page/Home';
import NotFound from './NotFound/NotFound';
import SharedLayout from './SharedLayout/SharedLayout';
import Credits from './Credits/Credits';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:moviesId" element={<MovieDetails />}>
          <Route path="credits" element={<Credits />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
