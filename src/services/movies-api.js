// https://api.themoviedb.org/3/trending/all/day?api_key=f78ff4f3a233cef30c068f16bf21ca7c

import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";
const API_KEY = "f78ff4f3a233cef30c068f16bf21ca7c";

export const fetchMovies = async () => {
  const response = await axios.get(`/3/trending/all/day?api_key=${API_KEY}`);
  //   console.log(response.data.results);
  return response.data.results;
};

export const fetchMovieById = async (movieId) => {
  const response = await axios.get(
    `/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  // console.log(response);
  return response.data;
};

export const fetchMovieByKeyWord = async (movieKeyWord) => {
  const response = await axios.get(
    `3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${movieKeyWord}`
  );
  console.log(response.data);
  return response.data.results;
};

// #ff6768
