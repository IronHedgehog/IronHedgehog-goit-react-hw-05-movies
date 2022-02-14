import { useEffect, useState } from 'react';
import MoviesForm from '../MoviesForm/MoviesForm';
import { GetByKeyword } from '../../services/FilmAPI';

const MoviesPage = () => {
  const [value, setValue] = useState('');
  const [films, setFilms] = useState([]);
  const valueOfInput = inputValue => {
    setValue(inputValue);
  };

  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    {
      value && GetByKeyword(value).then(setFilms);
    }
  }, [value]);

  return (
    <>
      <MoviesForm valueOfInput={valueOfInput} />
      {films && (
        <ul>
          {films.map(film => (
            <li key={film.id}>
              <p>{film.title}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesPage;
