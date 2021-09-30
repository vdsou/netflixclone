import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './ItemList.css';
import generateId from '../../libs/generateId';

function ItemList(props) {
  const { data } = props;
  const { title, item } = data;
  const [scrollX, setScrollX] = useState(0);
  const listWidth = item.results.length * 150;
  const handleNavBefore = () => {
    let value = scrollX + Math.round(window.innerWidth / 2);
    if (value > 0) {
      value = 0;
    }
    setScrollX(value);
  };
  const handleNavNext = () => {
    let value = scrollX - Math.round(window.innerWidth / 2);
    if (window.innerWidth - listWidth > value) {
      value = window.innerWidth - listWidth - 60;
    }
    setScrollX(value);
  };
  return (
    <div className="itemListRow">
      <h2>{title}</h2>
      <button
        type="button"
        className="featuredItem--navBefore"
        onClick={handleNavBefore}
      >
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </button>
      <button
        type="button"
        className="featuredItem--navNext"
        onClick={handleNavNext}
      >
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </button>
      <div className="itemListRow--listArea">
        <div
          className="itemListRow--horizontal"
          style={{
            marginLeft: scrollX,
          }}
        >
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
