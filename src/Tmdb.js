const API_KEY = '07f6846341d2e7a9559a2a2c6e942cf2';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async endpoint => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'shows',
        title: 'Séries Populares',
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'movies',
        title: 'Filmes Populares',
        items: await basicFetch(
          `/discover/movie?with_network=213&language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'treding',
        title: 'Recomendados para Você',
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'topRated',
        title: 'Em Alta',
        items: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'comedy',
        title: 'Comedia',
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'documentary',
        title: 'Documentarios',
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        )
      }
    ];
  },

  getMovieInfo: async (movieID, type) => {
    let info = {};

    if (movieID) {
      switch (type) {
        case 'movie':
          info = await basicFetch(
            `/movie/${movieID}?language=pt-BR&api_key=${API_KEY}`
          );
          break;

        case 'tv':
          info = await basicFetch(
            `/tv/${movieID}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
      }
    }

    return info;
  }
};
