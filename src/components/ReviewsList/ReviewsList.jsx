import ReviewsItems from 'components/ReviewsItems/ReviewsItems';
import React from 'react'
import { Item, List } from './ReviewsList.styled';

const ReviewsList = ({reviews}) => {
  return (
    <List>
      {reviews.map(review => (
          <Item key={review.id}>
              <ReviewsItems review={review} />
             
          </Item>
      ))}
    </List>
  );
}

export default ReviewsList