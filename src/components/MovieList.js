import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  const movieNodes = props.data.map(movie => {
    return(
        <Movie title={movie.title} key={movie.id} genre={movie.genre}>

        </Movie>
      )
  })
  return <div className="movie-list">
    {movieNodes}
  </div>
}


export default MovieList;
