import React from 'react'



class Movie extends React.Component{
  render(){
    return (
      <div className="movie">
        <div className="movieName">
           {this.props.movieName}  </div>  <div className="children">{ this.props.children }</div>
        
        
      </div>

      )
  }


}

export default Movie