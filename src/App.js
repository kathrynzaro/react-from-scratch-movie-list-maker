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
    },
    {
      title: 'Portrait of a Lady on Fire',
      director: 'Céline Sciamma',
      year: '2019',
      color: 'lavender'
    },
    {
      title: 'Jennifer\'s Body',
      director: 'Karyn Kusama',
      year: '2009',
      color: 'coral'
    },
    {
      title: 'The Thing',
      director: 'John Carpenter',
      year: '1982',
      color: 'antiquewhite'
    },
    {
      title: 'The Nightmare Before Christmas',
      director: 'Henry Selick',
      year: '1993',
      color: 'lightsalmon'
    },
    {
      title: 'The Princess Bride',
      director: 'Rob Reiner',
      year: '1987',
      color: 'lightgoldenrodyellow'
    },
    {
      title: 'Moulin Rouge!',
      director: 'Baz Luhrmann',
      year: '2001',
      color: 'lightblue'
    }
  ]);
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [movieYearReleased, setMovieYearReleased] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieColor, setMovieColor] = useState('pink');
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    setFilteredMovies(allMovies);
    setSearchQuery('');
  }, [allMovies]);

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

    setMovieTitle('');
    setMovieDirector('');
    setMovieYearReleased('');
    setMovieColor('pink');
  }

  function handleDeleteMovie(title) {
    const index = allMovies.findIndex(movie => movie.title === title);

    allMovies.splice(index, 1);
    setAllMovies([...allMovies]);
  }

  function handleFilterMovies(searchQuery) {
    setSearchQuery(searchQuery);
    const updatedMovies = allMovies.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));

    setFilteredMovies(updatedMovies);
  }

  return (
    <div className="App">
      <div className='filter-list'>
        <div className='filter-movie'>
          <h1>My Watchlist</h1>
          <input value={searchQuery} onChange={(e) => handleFilterMovies(e.target.value)} placeholder="search" />
          <img className='bounce tv' src='/transistor-tv.png' /> 
        </div>
        <MovieList
          filteredMovies={searchQuery ? filteredMovies : allMovies}
          handleDeleteMovie={handleDeleteMovie}
        />
      </div>
      <div className='bottom'>
        <div className='form-preview'>
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
        </div>
      </div>
    </div>
  );
}

export default App;


  // ✅ App() : track state for allMovies, filteredMovies, movieFormYearReleased, movieFormDirector, movieTitle, movieFormColor

  // ✅ App() : define a handleDeleteMovie function that deleted a movie from the state array using title

  // ✅ App() : define a handleFilterMovies function that takes in a string and set filteredMovies to an array of movies whose name matches that string

  // ✅ App() : passes state as props correctly to MovieForm, Movie, and MovieList

  // ✅ App() : add a useEffect: whenever the state of allMovies changes for any reason, reset the visible movies in state to show all movies. (Clearing out the filter input box would be nice too, but it's optional)