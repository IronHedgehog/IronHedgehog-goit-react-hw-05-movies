import { useEffect, useState } from 'react';
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';
import { GetFilmById } from '../../services/FilmAPI';
import CastPage from '../views/CastPage';
import ReviewsPage from './Reviews';
const MovieDetails = () => {
  const { url, path } = useRouteMatch();
  const { moviesId } = useParams();
  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    moviesId && GetFilmById(moviesId).then(setMovieInfo);
  }, [moviesId]);

  return (
    <>
      {movieInfo && (
        <div key={movieInfo.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`}
            alt={movieInfo.original_title}
          />
          <h1>{movieInfo.original_title}</h1>
          <h2>Release date: {movieInfo.release_date}</h2>
          <h2>User scores: {movieInfo.vote_average}</h2>
          <h2>Overview</h2>
          <p>{movieInfo.overview}</p>
          <hr />
          <h2>Genres</h2>
          {movieInfo && movieInfo.genres.map(genre => genre.name).join(' ')}
          <hr />
          <h2>Additional information</h2>
          {/* {console.log(url)} */}

          <Link to={`${url}/cast`}>Cast</Link>
          <Link to={`${url}/Reviews`}>Reviews</Link>
          <Route path={`${path}/cast`}>
            <CastPage />
          </Route>
          <Route path={`${path}/Reviews`}>
            <ReviewsPage />
          </Route>
          {/* <Route path="/movies/:movieId/reviews"></Route>
          <Route path="/movies/:movieId/cast"></Route> */}
        </div>
      )}
    </>
  );
};

export default MovieDetails;
