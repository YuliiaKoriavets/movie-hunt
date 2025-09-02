import axiosInstance from "./axiosInstance";

export const getTrendingMovies = async () => {
  const response = await axiosInstance.get(`trending/movie/day`);
  return response;
};

export const getSearchingMovies = async (query) => {
  const response = await axiosInstance.get(`search/movie`, {
    params: { query },
  });
  return response;
};

export const getMovieById = async (movieId) => {
    const response = await axiosInstance.get(`movie/${movieId}`);
  return response;
};

export const getMovieCredits = async (movieId) => {
    const response = await axiosInstance.get(`movie/${movieId}/credits`);
  return response;
};

export const getMovieReviews = async (movieId) => {
    const response = await axiosInstance.get(`movie/${movieId}/reviews`);
  return response;
};
