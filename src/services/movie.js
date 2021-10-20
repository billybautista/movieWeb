import axios from "../modules/axios";

export const getDiscoveryMovie = () => {
  return axios
    .get("/discover/movie?api_key=f489c6a91feead934e32a34d0011a8f6&page=1")
    .then((res) => res.data);
};

export const getMovieDetail = (id) => {
  return axios
    .get(`/movie/${id}?api_key=f489c6a91feead934e32a34d0011a8f6`)
    .then((res) => res.data);
};

export const getMovieRecomendations = (id) => {
  return axios
    .get(
      `/movie/${id}/recommendations?api_key=f489c6a91feead934e32a34d0011a8f6`
    )
    .then((res) => res.data);
};
