import React from 'react';
import Movie from './Movie';

export default function MovieList({ allMovies, handleDeleteMovie }) {
  return (
    <div className='movie-list'>
      {
        allMovies.map((movie, i) => <Movie
          handleDeleteMovie={handleDeleteMovie}
          key={movie.title + i} movie={movie} />
        )
      }
    </div>
  );
}



// MovieList({ movies }) : takes in a movies prop and renders a list of Movie components.	