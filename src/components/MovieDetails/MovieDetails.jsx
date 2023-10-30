import React from 'react'
import { FlexWrapper, H3, InfoWrapper, Text, Title } from './MovieDetails.styled';

const MovieDetails = ({ movie }) => {
  const { title, release_date, vote_average, overview, genres,poster_path } = movie || {};
  const date = release_date?.slice(0, 4); 
  const userSkore = Math.round((Number(vote_average) * 100) / 10);
 const defaultImg =
   'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

 const moviesImg = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <FlexWrapper>
      <img src={poster_path ? moviesImg : defaultImg} width={250} alt="" />
      <InfoWrapper>
        <Title>
          {title} <span>({date})</span>
        </Title>
        <H3>
          User skore: <span> {userSkore}%</span>
        </H3>
        <H3>Overview</H3>
        <Text>{overview}</Text>
        <H3>Genres</H3>
        <Text>{genres?.map(({ name }) => name).join(' , ')}</Text>
      </InfoWrapper>
    </FlexWrapper>
  );
}

export default MovieDetails