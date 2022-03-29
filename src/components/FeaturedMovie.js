import React from 'react';
import './FeaturedMovie.css';

function FeaturedMovie({ item }) {
  let genres = [];

  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;

  if (description.length > 220) {
    description = description.substring(0, 220) + '...';
  }

  //pegando horas e minutos caso for um filme
  const getTime = () => {
    let seconds = item.runtime * 60,
      minutes = (seconds % 3600) / 60,
      hours = Math.floor(seconds / 3600);

    return (
      <div className="time">
        <strong>{hours}h </strong>
        <strong>{minutes}m</strong>
      </div>
    );
  };

  //pegando a data de lançamento do filme/serie
  const getDate = () => {
    let firstDate;

    if (item.first_air_date) {
      firstDate = new Date(item.first_air_date).getFullYear();

      return firstDate;
    } else {
      firstDate = new Date(item.release_date).getFullYear();

      return firstDate;
    }
  };

  //pegando o nome do filme/serie
  const movietitle = () => {
    let movieName;
    item.title ? (movieName = item.title) : (movieName = item.name);

    return movieName;
  };

  //pegando temporadas, caso for serie, ou duração, caso for filme.
  const movieInfo = () => {
    if (item.seasons) {
      return (
        <div className="featured--Season">
          <div>
            Temporada{item.number_of_seasons > 1 ? 's' : ''}:{' '}
            {item.number_of_seasons}
          </div>
        </div>
      );
    } else {
      return <div className="featured--Season">{getTime()}</div>;
    }
  };
  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{movietitle()}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{getDate()}</div>
            <div className="featured--seasons">{movieInfo()}</div>
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--watchbutton">
              ► Assistir
            </a>
            <a href={`list/add/${item.id}`} className="featured--mylistbutton">
              + Minha Lista
            </a>
          </div>
          <div className="featured--genres">
            <strong>Gênero{genres.length > 1 ? 's' : ''}: </strong>
            {genres.length !== 0 ? genres.join(', ') : item.type}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovie;
