import React from 'react'
import { Container, IMG, Span, Text, Title } from './ReviewsItems.styled';

const ReviewsItems = ({ review }) => {
    const defaultImg =
      'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    const moviesImg = `https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`;

    const { author, author_details, content, created_at } = review;
  return (
    <Container>
      <IMG
        src={author_details.avatar_path ? moviesImg : defaultImg}
        alt=""
        width={75}
      />
      <div>
          <Span>{author_details.rating}</Span>
          <Title>{author}</Title>
          <Text>{content}</Text>
          <Span>{created_at}</Span>
      </div>
    </Container>
  );
}

export default ReviewsItems