import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import './App.css';
import Links from './components/Links/Links';
import HomePage from './components/views/HomePage.jsx';
import MoviesPage from './components/views/MoviesPage';
import MovieDetails from './components/views/MovieDetailsPage';

function App() {
  return (
    <Container>
      <Links />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies/:movieId/reviews"></Route>
        <Route path="/movies/:movieId/cast"></Route>
        <Route path="/movies/:moviesId">
          <MovieDetails />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
