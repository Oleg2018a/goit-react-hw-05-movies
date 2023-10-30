import React from 'react'
import { Title } from './MoviesQueryItem.styled';

const MoviesQueryItem = ({ movie }) => {
    const defaultImg =
      'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    const moviesImg = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div>
      
      <img src={movie.poster_path ? moviesImg : defaultImg} width={200} alt="" />
      <Title>{movie.title}</Title>
    </div>
  );
}

export default MoviesQueryItem