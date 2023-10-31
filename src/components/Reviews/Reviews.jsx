import { GetReviews } from 'api'
import ReviewsList from 'components/ReviewsList/ReviewsList'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Reviews = () => {
  const {moviesId} = useParams()
  const [reviews, setReviews] = useState(null)
  
  useEffect(() => {
    const getReviewUser = async moviesId => {
      try {
        const review = await GetReviews(moviesId)
        setReviews([...review.results])
      } catch (error) {
        console.error('error')
      }
     
    }
     getReviewUser(moviesId);
  }, [moviesId])
 
  return (
    <>
      <>
        {reviews && <ReviewsList reviews={reviews} />}
        {/* {reviews.length !== 0 ? (
          <ReviewsList reviews={reviews} />
        ) : (
          <Eror>
            <b>Поки немає коментарів (:</b>
          </Eror>
        )} */}
      </>
    </>
  );
}

export default Reviews