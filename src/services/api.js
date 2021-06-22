import axios from 'axios';

const api = axios.create({
  baseURL: 'https://45140776f22d.ngrok.io',
});

export default api;
