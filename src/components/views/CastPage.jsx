import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastFetch } from '../../services/FilmAPI';
import placeholder from '../../assets/img/placeholder.jpg';

const CastPage = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    CastFetch(moviesId).then(setCast);
  }, [moviesId]);
  return (
    <>
      <br />
      {cast &&
        cast.map(actor => (
          <li key={actor.id} >
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.original_name}
              />
            ) : (
              <img
                style={{
                  width: '200px',
                }}
                src={placeholder}
                alt="No"
              />
            )}

            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
    </>
  );
};

export default CastPage;
