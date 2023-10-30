import { getTopMovies } from 'api';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList'
import NotFound from 'components/NotFound/NotFound';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error , setError] = useState(false)
     useEffect(() => {
       async function getMovies() {
         try {
           setLoading(true)
           setError(false)
           const movi = await getTopMovies();
           setMovies([...movi.results]);
         } catch (error) {
           setError(true)
           console.error('dcvrvfinvhbvibdsiyvbf');
         }
         finally {
           setLoading(false)
         }
       }
       getMovies();
     }, []);
  
  return (
    <>
      {loading ? <Loader/> : <MoviesList movies={movies} />}
      {error && <NotFound/>}
    </>
  );
}

export default Home