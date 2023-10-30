import { getSearchMovies } from 'api';
import Loader from 'components/Loader/Loader';

import MoviesQueryList from 'components/MoviesQueryList/MoviesQueryList';
import NotFound from 'components/NotFound/NotFound';
import SearchMovies from 'components/SearchMovies/SearchMovies'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Movies = () => {

   const [searchParams, setSearchParams] = useSearchParams();
   const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') ?? '';
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
 
  
 
    useEffect(() => {
   async function getSerch() {
     if(!query) return
     try {
       setLoading(true)
       setError(false)
       const { results } = await getSearchMovies(query);
       setMovies([...results]);
     } catch (error) {
       setError(true)
       console.error('eror!!!!!11');
     }
     finally { setLoading(false) }
   }
   getSerch(query);
 }, [query]);
  const onSubmit = value => {
   setSearchParams({query: value})
  }

  return (
    <>
      <SearchMovies setMovieSearch={onSubmit} />
      {loading ? <Loader/> : <MoviesQueryList movies={movies} />}
      {error && <NotFound/>}
    </>
  );
}

export default Movies