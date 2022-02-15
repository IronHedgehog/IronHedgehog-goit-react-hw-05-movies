import { useEffect, useState, lazy, Suspense } from 'react';
import {
  Route,
  useParams,
  Link,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { GetFilmById } from '../../services/FilmAPI';
import { TailSpin } from 'react-loader-spinner';

const CastPage = lazy(() =>
  import('./CastPage' /* webpackChunkName: "CastPage" */),
);
const ReviewsPage = lazy(() =>
  import('./Reviews' /* webpackChunkName: "ReviewsPage" */),
);

const MovieDetails = () => {
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  const { moviesId } = useParams();
  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    moviesId && GetFilmById(moviesId).then(setMovieInfo);
  }, [moviesId]);

  const backButtonClick = () => {
    // history.goBack();
    // history.push(location.state.from);
    history.goBack();
  };

  const backToHome = () => {
    history.push('/');
  };
  return (
    <>
      {movieInfo && (
        <>
          <button type="button" onClick={backToHome}>
            Back to home
          </button>
          <button type="button" onClick={backButtonClick}>
            Go back
          </button>

          <div key={movieInfo.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`}
              alt={movieInfo.original_title}
            />
            <h1>{movieInfo.original_title}</h1>
            <h2>Release date: {movieInfo.release_date}</h2>
            <h2>User scores: {movieInfo.vote_average}</h2>
            <hr />
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <hr />
            <h2>Genres</h2>
            {movieInfo && movieInfo.genres.map(genre => genre.name).join(' ')}
            <hr />
            <h2>Additional information</h2>
            {/* {console.log(url)} */}
            <ul>
              <li>
                <Link
                  to={{
                    pathname: `${url}/cast`,
                    state: {
                      from: location,
                    },
                  }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: `${url}/Reviews`,
                    state: {
                      from: location,
                    },
                  }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
            <hr />
            <Suspense
              fallback={<TailSpin color="#00BFFF" height={80} width={80} />}
            >
              <Route path={`${path}/cast`}>
                <CastPage />
              </Route>
              <Route path={`${path}/Reviews`}>
                <ReviewsPage />
              </Route>
            </Suspense>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
