import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '246ea467c6de641bc4f7f6609438859f',
    language: 'en-US',
  },
});

export default axiosInstance;