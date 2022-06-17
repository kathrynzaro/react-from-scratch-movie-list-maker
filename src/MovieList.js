import React from 'react';
import Movie from './Movie';

export default function MovieList({ filteredMovies, handleDeleteMovie }) {
  return (
    <div className='movie-list'>
      {
        filteredMovies.map((movie, i) => <Movie
          handleDeleteMovie={handleDeleteMovie}
          key={movie.title + i} movie={movie} />
        )
      }
    </div>
  );
}



// ✅ MovieList({ movies }) : takes in a movies prop and renders a list of Movie components.	