import React from 'react';
import ReactDOM from 'react-dom';
import MovieBox from './components/MovieBox';


window.onload = function(){
  ReactDOM.render(
    <MovieBox/>,
    document.getElementById('app')
  );
}
