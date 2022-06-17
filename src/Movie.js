import React from 'react';
// import MovieList from './MovieList';

export default function Movie({ movie, handleDeleteMovie }) {
  return (
    <div onClick={() => handleDeleteMovie && handleDeleteMovie(movie.title)} className='poster' style={{ background: movie.color }}>
      <h3>{movie.title}</h3>
      <p>{movie.director}</p>
      <p>{movie.year}</p>
    </div>
  );
}


// ✅ Movie({ movie }) : takes in a movie and renders it with the correct color background	