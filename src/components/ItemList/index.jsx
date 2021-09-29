import React from 'react';
import PropTypes from 'prop-types';
import './ItemList.css';
import generateId from '../../libs/generateId';

function ItemList(props) {
  const { data } = props;
  const { title, item } = data;
  return (
    <div className="itemListRow">
      <h2>{title}</h2>
      <div className="itemListRow--listArea">
        <div className="itemListRow--horizontal">
          {item.results.map((elemtent) => (
            <div className="itemListRow--item" key={generateId(999999)}>
              <img
                src={`https://image.tmdb.org/t/p/w300${elemtent.poster_path}`}
                alt={item.results.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ItemList.propTypes = {
  data: PropTypes.object,
}.isRequired;

export default ItemList;
