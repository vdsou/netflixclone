import React from 'react';
import PropTypes from 'prop-types';
import './FeaturedItem.css';

function FeaturedItem(props) {
  const { data } = props;
  let backgroundImg = data.backdrop_path;
  if (data.backdrop_path === null) {
    backgroundImg = data.poster_path;
  }
  const releaseDate = new Date(data.first_air_date);
  const year = releaseDate.getFullYear();
  let genres = data.genres.map((genre) => genre.name);
  genres = genres.join(', ');
  // console.log(data);
  return (
    <section
      className="featuredItem"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${backgroundImg}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="featuredItem--y">
        <div className="featuredItem--x">
          <h1 className="featuredItem--title">{data.name}</h1>
          <div className="featuredItem--info">
            <div className="featuredItem--points">
              {data.vote_average}
              <span> pontos</span>
            </div>
            <div className="featuredItem--year">{year}</div>
            <div className="featuredItem--seasons">
              {data.number_of_seasons}
              <span> temporada</span>
              {data.number_of_seasons !== 1 ? 's' : ''}
            </div>
          </div>
          <div className="featuredItem--overview">{data.overview}</div>
          <div className="buttons">
            <button type="button" className="featuredItem--watchButton">
              {' '}
              ▸ Assistir
            </button>
            <button type="button" className="featuredItem--addButton">
              {' '}
              + Minha Lista
            </button>
          </div>
          <div className="featuredItem--genres">{genres}</div>
        </div>
      </div>
    </section>
  );
}
FeaturedItem.propTypes = {
  data: PropTypes.object,
}.isRequired;

export default FeaturedItem;
