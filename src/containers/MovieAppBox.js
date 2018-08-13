import React from 'react';
import MovieList from '../components/MovieList';

class MovieAppBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [{
        id: 1,
        title: "The Meg",
        genre: "Documentary"
      },
    {
      id: 2,
      title: "Sicario",
      genre: "Rom-Com"
    },
    {
      id: 3,
      title: "Incredibles 2",
      genre: "Horror"
    },
    {
      id: 4,
      title: "Mission Impossible",
      genre: "Drama"
    }]
    }
  }

  render(){
    return <div className="movie-box">
      <h1>Movies on Near You !</h1>
      <MovieList data={this.state.data}/>
    </div>
  }
}

export default MovieAppBox;
