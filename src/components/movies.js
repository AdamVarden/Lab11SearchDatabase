import React from 'react';
import '../App.css';
import MovieItem from './movieItem';

class Movies extends React.Component {
 render(){
    return this.props.myMovies.map((movie)=>{
       // console.log({movie});
        return <MovieItem key ={movie.imdbID} movie={movie}></MovieItem>
    });
  }
}
export default Movies;
