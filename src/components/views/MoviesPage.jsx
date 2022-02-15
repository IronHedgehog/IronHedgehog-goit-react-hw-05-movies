import { useEffect, useState } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { GetByKeyword } from '../../services/FilmAPI';
import MoviesForm from '../MoviesForm/MoviesForm';

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState(location.search);
  const [films, setFilms] = useState([]);
  const [err, setErr] = useState();

  const valueOfInput = inputValue => {
    setValue(inputValue);
  };

  useEffect(() => {
    value &&
      GetByKeyword(value)
        .then(setFilms)
        .catch(err => setErr(err.message));
    setErr(null);
  }, [value]);

  useEffect(() => {
    if (location.search !== '' && value === undefined) {
      return;
    }

    history.push({ ...location, search: `${value}` });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <>
      <MoviesForm valueOfInput={valueOfInput} />
      {err
        ? err
        : films && (
            <ul>
              {films.map(film => (
                <li key={film.id}>
                  <Link
                    to={{
                      pathname: '/movies/' + film.id,
                      state: {
                        from: location
                      },
                    }}
                  >
                    {film.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
    </>
  );
};

export default MoviesPage;
