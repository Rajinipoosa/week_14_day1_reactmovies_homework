import React from 'react'
import MovieList from './MovieList'
import Movie from './Movie'


class MovieBox extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data: [{id:1, movieName:'The Mummy' ,text: 'Show Time'},
      {id:2, movieName:'Megan Leavey' ,text: 'Show Time'},
      {id:3, movieName:'It Comes at Night' ,text: 'Show Time'},
      {id:4, movieName:'The Hero' ,text: 'Show Time'},
      {id:5, movieName:'Beatriz at Dinner' ,text: 'Show Time'}]
    }
  }
  //   displayTimings(){
  //     const timings = this.state.data.text ;
  //     this.setState({time: timings});
        
    
  // }
  render(){
    return(
      <div className ="movie-box" >
      <h3>UK Opening This Week</h3>
      <MovieList data={this.state.data}>
        
      </MovieList>
      <button onClick={this.displayTimings} className = "button">Get Show times</button>
       </div>
      )
  }

}

export default MovieBox