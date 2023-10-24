import React from 'react'

const MoviesItems = ({ movie }) => {
    
  return (
    <div>
      <li key={movie.id}>
        <img src={movie.backdrop_path} alt="" />
        <p>{movie.title}</p>
      </li>
    </div>
  );
}

export default MoviesItems