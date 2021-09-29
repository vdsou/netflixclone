import axios from 'axios';
import generateId from '../libs/generateId';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getData = async (endpoint) => {
  const request = await axios
    .get(`${BASE_URL}${endpoint}`)
    .then((response) => response)
    .catch((error) => error);

  return request.data;
};

export default {
  async getAllList() {
    return [
      {
        id: generateId(99999999),
        name: 'originals',
        title: 'Originais do Netflix',
        item: await getData(`/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`),
      },
      {
        id: generateId(99999999),
        name: 'trending',
        title: 'Recomendados',
        item: await getData(`/trending/all/day?api_key=${API_KEY}&language=pt-BR`),
      },
      {
        id: generateId(99999999),
        name: 'toprated',
        title: 'Em alta',
        item: await getData(`/movie/top_rated?api_key=${API_KEY}&language=pt-BR`),
      },
      {
        id: generateId(99999999),
        name: 'action',
        title: 'Ação',
        item: await getData(`/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`),
      },
      {
        id: generateId(99999999),
        name: 'comedy',
        title: 'Comédia',
        item: await getData(`/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`),
      },
      {
        id: generateId(99999999),
        name: 'horror',
        title: 'Terror',
        item: await getData(`/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`),
      },
      {
        id: generateId(99999999),
        name: 'romance',
        title: 'Romance',
        item: await getData(`/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`),
      },
      {
        id: generateId(99999999),
        name: 'documentary',
        title: 'Documentário',
        item: await getData(`/discover/movie?api_key=${API_KEY}&with_genres=99&language=pt-BR`),
      },
    ];
  },
};
