import React from 'react';
import { Item, StyleLink, Title } from './MoviesItem.styled';
import { useLocation } from 'react-router-dom';

const MoviesItems = ({ movie }) => {
     const location = useLocation();
     console.log(location.state);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    

  const moviesImg = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
 
  return (
    <div>
      <Item key={movie.id}>
        <StyleLink to={`/movies/${movie.id}`} state={{ from: location }}>
          <img
            src={movie.poster_path ? moviesImg : defaultImg}
            alt="weqw"
            width={200}
          />
          <Title>{movie.title || movie.name}</Title>
        </StyleLink>
      </Item>
    </div>
  );
};

export default MoviesItems;
