import React from 'react';

const Movie = (props) => {
  return(
    <div className="movie">
      <h2>{props.title}</h2>
      <h4>{props.genre}</h4>
    </div>
  )

}


export default Movie;
