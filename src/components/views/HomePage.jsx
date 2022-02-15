import { GetPopularFilm } from '../../services/FilmAPI';
import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import MovieDetails from './MovieDetailsPage';
import { useLocation } from 'react-router-dom';

const PopularListItem = () => {
  const location = useLocation();
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
              <Link
                to={{
                  pathname: '/movies/' + film.id,
                  state: {
                    from: location,
                  },
                }}
              >
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
