import './App.css';
import { useEffect, useState } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';

function App() {
  const [allMovies, setAllMovies] = useState([
    {
      title: 'Titanic',
      director: 'James Cameron',
      year: '1997',
      color: 'pink'
    }
  ]);
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [movieYearReleased, setMovieYearReleased] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieColor, setMovieColor] = useState('pink');


  function handleSubmitMovie(e) {
    e.preventDefault();

    const movie = {
      title: movieTitle,
      director: movieDirector,
      year: movieYearReleased,
      color: movieColor,
    };

    const updatedMovies = [...allMovies, movie];
    setAllMovies(updatedMovies);
  }

  function handleDeleteMovie(title) {
    const index = allMovies.findIndex(movie => movie.title === title);

    allMovies.splice(index, 1);
    setAllMovies([...allMovies]);
  }

  console.table(allMovies);

  return (
    <div className="App">
      <MovieForm 
        movieTitle={movieTitle}
        setMovieTitle={setMovieTitle}
        movieDirector={movieDirector}
        setMovieDirector={setMovieDirector}
        movieYearReleased={movieYearReleased}
        setMovieYearReleased={setMovieYearReleased}
        movieColor={movieColor}
        setMovieColor={setMovieColor}
        handleSubmitMovie={handleSubmitMovie}
      />
      <div className='current-movie'>
        <Movie movie={{
          title: movieTitle,
          director: movieDirector,
          year: movieYearReleased,
          color: movieColor,
        }}/>
      </div>
      <div className='filter-movie'>
        Filter Movies
      </div>
      <MovieList
        allMovies={allMovies}
        handleDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;


  // ✅

  // App() : track state for allMovies, filteredMovies, movieFormYearReleased, movieFormDirector, movieTitle, movieFormColor

  // App() : define a handleDeleteMovie function that deleted a movie from the state array using title

  // App() : define a handleFilterMovies function that takes in a string and set filteredMovies to an array of movies whose name matches that string

  // App() : passes state as props correctly to MovieForm, Movie, and MovieList

  // App() : add a useEffect: whenever the state of allMovies changes for any reason, reset the visible movies in state to show all movies. (Clearing out the filter input box would be nice too, but it's optional)