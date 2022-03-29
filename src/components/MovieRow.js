import React, { useState } from 'react';
import './MovieRow.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function MovieRow({ title, items }) {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftRow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  };

  const handleRightRow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 200;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movierow--left" onClick={handleLeftRow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movierow--right" onClick={handleRightRow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--listArea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 200
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.name}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;
