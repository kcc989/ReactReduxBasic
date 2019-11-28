import axios from 'axios';

export const mySiteHttpClient = axios.create({
  baseURL: 'http://167.172.231.32/api/v1',
  timeout: 5000,
});
