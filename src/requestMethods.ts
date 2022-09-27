import axios from 'axios';

export const baseUrl = axios.create({
  baseURL: 'https://recruitmentdb-508d.restdb.io/rest/',
  headers: {
    'x-apikey': '5d9f48133cbe87164d4bb12c',
  },
});
