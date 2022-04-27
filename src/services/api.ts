import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-nba-v1.p.rapidapi.com',
});

export default api;
