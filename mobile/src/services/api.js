import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://10.0.2.2:3333',
  //baseURL: 'http://192.168.1.51:3333',
  baseURL: 'https://gobarber.threehands.com.br',
});

export default api;
