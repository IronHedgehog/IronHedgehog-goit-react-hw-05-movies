import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from './components/Container/Container';
import './App.css';
import Links from './components/Links/Links';
import { TailSpin } from 'react-loader-spinner';
// import NotFound from './components/views/NotFound';
// import HomePage from './components/views/HomePage.jsx';
// import MoviesPage from './components/views/MoviesPage';
// import MovieDetails from './components/views/MovieDetailsPage';

const HomePage = lazy(() =>
  import('./components/views/HomePage.jsx' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./components/views/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetails = lazy(() =>
  import(
    './components/views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);
const NotFound = lazy(() =>
  import('./components/views/NotFound' /* webpackChunkName: "NotFound" */),
);

function App() {
  return (
    <Container>
      <Links />
      <Suspense fallback={<TailSpin color="#00BFFF" height={80} width={80} />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies/:moviesId">
            <MovieDetails />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/not-found">
            <NotFound />
          </Route>
          <Redirect to="/not-found" />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
