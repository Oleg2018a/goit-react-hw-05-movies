import MoviesQueryItem from 'components/MoviesQueryItem/MoviesQueryItem';
import React from 'react'

import { Item, List, StyleLink } from './MoviesQueryList.styled';
import { useLocation } from 'react-router-dom';

const MoviesQueryList = ({ movies }) => {
  const location = useLocation()
  return (
    <List>
      {movies.map(movie => (
        <StyleLink to={`/movies/${movie.id}` } state={{from: location}}>
          <Item key={movie.id}>
            <MoviesQueryItem movie={movie} />
          </Item>
        </StyleLink>
      ))}
    </List>
  );
}

export default MoviesQueryList