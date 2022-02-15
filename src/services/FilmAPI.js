import axios from 'axios';
//api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>
//   https://api.themoviedb.org/3/movie/105872?api_key=5456eae918aecb3e2e60ac718603b47e&language=en-US
// Request URL: https://api.themoviedb.org/3/movie/634649?api_key=5456eae918aecb3e2e60ac718603b47e&languages=en-US

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const GetPopularFilm = async () => {
  try {
    const res = await axios.get(
      'trending/movie/day?api_key=5456eae918aecb3e2e60ac718603b47e',
    );
    if (!res.data.results.length) {
      throw new Error('Not found');
    }
    return res.data.results;
  } catch (err) {
    throw err;
  }
};

export const GetByKeyword = async (query = 'car', page = 1) => {
  try {
    const res = await axios.get(
      `search/movie?api_key=5456eae918aecb3e2e60ac718603b47e&query=${query}&page=${page}`,
    );
    if (!res.data.results.length) {
      throw new Error('Not found');
    }
    return res.data.results;
  } catch (err) {
    throw err;
  }
};

export const GetFilmById = async movie_id => {
  try {
    const res = await axios.get(
      `movie/${movie_id}?api_key=5456eae918aecb3e2e60ac718603b47e&language=en-US`,
    );
    if (!res.data) {
      throw new Error('Not found');
    }

    return res.data;
  } catch (err) {
    throw err;
  }
};

// https://api.themoviedb.org/3/movie/:moviesId?api_key=5456eae918aecb3e2e60ac718603b47e&language=en-US

export const CastFetch = async movie_id => {
  try {
    const res = await axios.get(
      `movie/${movie_id}/credits?api_key=5456eae918aecb3e2e60ac718603b47e&language=en-US`,
    );
    if (!res.data.cast) {
      throw new Error('Not found');
    }

    return res.data.cast;
  } catch (err) {
    throw err;
  }
};

export const ReviewsFetch = async movie_id => {
  try {
    const res = await axios.get(
      `movie/${movie_id}/reviews?api_key=5456eae918aecb3e2e60ac718603b47e&language=en-US`,
    );
    if (!res.data.results) {
      throw new Error('Not found');
    }

    return res.data.results;
  } catch (err) {
    throw err;
  }
};
