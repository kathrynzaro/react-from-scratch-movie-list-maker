import React from 'react';

export default function MovieForm({
  movieTitle, 
  setMovieTitle,
  movieDirector,
  setMovieDirector,
  movieYearReleased,
  setMovieYearReleased,
  movieColor,
  setMovieColor,
  handleSubmitMovie
}) {
  return (
    <div className='movie-form-container'>
      <h2>New Movie</h2>
      <form className='movie-form' onSubmit={handleSubmitMovie}>
        <label>
          Title
          <input required value={movieTitle} onChange={e => setMovieTitle(e.target.value)} />
        </label>
        <label>
          Director
          <input required value={movieDirector} onChange={e => setMovieDirector(e.target.value)} />
        </label>
        <label>
          Year
          <input required value={movieYearReleased} onChange={e => setMovieYearReleased(e.target.value)} />
        </label>
        <label>
          Color
          <select required value={movieColor} onChange={e => setMovieColor(e.target.value)}> 
            <option value='lightpink'>pink</option>
            <option value='antiquewhite'>off-white</option>
            <option value='lightsalmon'>salmon</option>
            <option value='lightcoral'>coral</option>
            <option value='lavender'>lavender</option>
            <option value='lightgoldenrodyellow'>light yellow</option>
            <option value='lightblue'>light blue</option>
          </select>
        </label>
        <button>add to watchlist</button>
      </form> 
    </div>
  );
}



// ✅ MovieForm({ movieFormYearReleased, setMovieFormTitle, movieFormDirector, setMovieFormColor, movieFormColor, submitMovie }) : on change for each input, call the appropriate state handler prop with the correct e.target.value to update App.js state.

// ✅ MovieForm({ movieFormYearReleased, setMovieFormTitle, movieFormDirector, setMovieFormColor, movieFormColor, handleSubmitMovie }) : on submit, add a movie to state.	