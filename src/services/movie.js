import axios from "../modules/axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getDiscoveryMovie = () => {
  return axios
    .get(`/discover/movie?api_key=${API_KEY}`)
    .then((res) => res.data);
};

export const getMovieDetail = (id) => {
  return axios.get(`/movie/${id}?api_key=${API_KEY}`).then((res) => res.data);
};

export const getMovieRecomendations = (id) => {
  return axios
    .get(`/movie/${id}/recommendations?api_key=${API_KEY}`)
    .then((res) => res.data);
};

export const searchMovie = (movie) => {
  return axios
    .get(`/search/movie?api_key=${API_KEY}&query=${movie}`)
    .then((res) => res.data);
};
