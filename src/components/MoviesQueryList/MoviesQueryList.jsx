import MoviesQueryItem from 'components/MoviesQueryItem/MoviesQueryItem';
import React from 'react'

import { Item, List, StyleLink } from './MoviesQueryList.styled';

const MoviesQueryList = ({movies}) => {
  return (
    <List>
      {movies.map(movie => (
        <StyleLink to={`/movies/${movie.id}`}>
          <Item key={movie.id}>
            <MoviesQueryItem movie={movie} />
          </Item>
        </StyleLink>
      ))}
    </List>
  );
}

export default MoviesQueryList