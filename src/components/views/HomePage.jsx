import { GetPopularFilm } from '../../services/FilmAPI';
import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import MovieDetails from './MovieDetailsPage';

const PopularListItem = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    GetPopularFilm().then(setFilms);
  }, []);

  return (
    <>
      {films && (
        <ul>
          {films.map(film => (
            <li key={film.id}>
              <Link to={'/movies/' + film.id}>
                <p>{film.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Route path="/movies/:moviesId">
        <MovieDetails />
      </Route>
    </>
  );
};

export default PopularListItem;
