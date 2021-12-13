const API_KEY = '4bb785fcd7c7a8a200a9be11d96acb18';
const BASE_URL = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint, ...moreEndpoint) => {
let response = await fetch(`${BASE_URL}/${endpoint}?api_key=${API_KEY}&${moreEndpoint}`);
let data = response.json();
return data;
}

const GetHomeList = async () => {
  return [
    {
      slug: 'originals',
      title: 'Originais do Netflix',
      items: await basicFetch('discover/tv', 'with_network=213&language=pt-BR'),
      id: 1
    },

    {
      slug: 'trending',
      title: 'Recomendados para você',
      items: await basicFetch('trending/all/week', '&language=pt-BR'),
      id: 2
    },

    {
      slug: 'toprated',
      title: 'Em alta',
      items: await basicFetch('movie/top_rated', '&language=pt-BR'),
      id: 3
    },

    {
      slug: 'action',
      title: 'Acção',
      items: await basicFetch('discover/movie', 'with_genres=28&language=pt-BR'),
      id: 4
    },

    {
      slug: 'comedy',
      title: 'Comédia',
      items: await basicFetch('discover/movie', 'with_genres=35&language=pt-BR'),
      id: 5
    },

    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch('discover/movie', 'with_genres=27&language=pt-BR'),
      id: 6
    },

    {
      slug: 'romance',
      title: 'Romance',
      items: await basicFetch('discover/movie', 'with_genres=1749&language=pt-BR'),
      id: 7
    },

    {
      slug: 'documentary',
      title: 'Documentários',
      items: await basicFetch('discover/movie', 'with_genres=23&language=pt-BR'),
      id: 8
    }
  ]
}

export default GetHomeList;
