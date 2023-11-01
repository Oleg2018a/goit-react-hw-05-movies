
import { getDetails } from 'api'
import MovieDetails from 'components/MovieDetails/MovieDetails';
import React, { useEffect, useState } from 'react'
import {   Outlet,        useParams } from 'react-router-dom'
import { Link, Paragraf } from './Page.Styled';

import NotFound from 'components/NotFound/NotFound';
import Loader from 'components/Loader/Loader';
import ButtonBack from 'components/BackToLink/BackToLInk';


const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [moviesDetails, setMovies] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
 

  
  useEffect(() => {
    if(moviesDetails) return
    const getMovies = async moviesId => {
      try {
        setLoading(true)
        const movie = await getDetails(moviesId);
        setMovies(movie);
      } catch (error) {
        setError(true)
        console.error('Error:', error);
      }
      finally {
        setLoading(false)
      }
    };

    getMovies(moviesId);
  }, [moviesDetails,moviesId]);


 
  return (
    <>
      <ButtonBack/>
      {loading ? <Loader /> : <MovieDetails movie={moviesDetails} />}
      {error && <NotFound />}
      <Paragraf>
        <Link to="credits">Cast</Link>
      </Paragraf>
      <Paragraf>
        <Link to="reviews" >Reviews</Link>
      </Paragraf>
      <Outlet />
    </>
  );
}

export default MovieDetailsPage;

