import React, { useEffect, useState } from 'react';
import './App.css';

import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const getAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando uma featured
      let listOption = Math.floor(Math.random() * 2);
      let type = '';
      listOption == 0 ? (type = 'tv') : (type = 'movie');
      let movieOption = Math.floor(
        Math.random() * list[listOption].items.results.length
      );

      let chosen = list[listOption].items.results[movieOption];

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, type);
      console.log(chosenInfo);
      setFeaturedData(chosenInfo);
    };

    getAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="container">
        {movieList.map((item, key) => (
          <MovieRow title={item.title} items={item.items} key={key} />
        ))}
      </section>

      {movieList.length <= 0 && featuredData == null && (
        <div className="loading">
          <img
            className="loading-img"
            src="https://media.tenor.com/images/9a02aac51ed499e01518ac73dd954eb1/tenor.gif"
          />
        </div>
      )}
    </div>
  );
}

export default App;
