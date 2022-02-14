import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetFilmById } from '../../services/FilmAPI';
const MovieDetails = () => {
  const { moviesId } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    {
      moviesId && GetFilmById(moviesId).then(setMovieInfo);
    }
  }, [moviesId]);
  //   console.log(
  //     movieInfo.genres.map(d => {
  //       return console.log(d.name);
  //     }),
  //   );
  return (
    <>
      {movieInfo && (
        <div key={movieInfo.id}>
          <img
            src={`https://image.tmdb.org/t/p/w400${movieInfo.poster_path}`}
            alt={movieInfo.original_title}
          />
          <p>User scores: {movieInfo.vote_average}</p>
          <h2>Overview</h2>
          <p>{movieInfo.overview}</p>
          <h2>Genres</h2>
          {/* {movieInfo &&
            movieInfo.genres.map(d => {
              return <p>{d.name}</p>;
            })} */}

          <hr />
          <h2>Additional information</h2>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
