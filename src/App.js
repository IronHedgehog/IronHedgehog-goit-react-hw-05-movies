import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import './App.css';
import Links from './components/Links/Links';
import { TailSpin } from 'react-loader-spinner';
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
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
