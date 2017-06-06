import React from 'react'
import Movie from './Movie'


class MovieList extends React.Component{

  render(){
  const movieNodes = this.props.data.map((movie) => {
    return (
      <Movie movieName={movie.movieName} key={ movie.id } >
      { movie.text}
      </Movie>
      )
  })
   
   return(
    <div className="movie-list">
          { movieNodes }
           </div>
          
      )
  }
 


 }
 export default MovieList