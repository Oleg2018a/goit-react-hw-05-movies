import { getTopMovies } from 'api';
import MoviesItems from 'components/MoviesItems/MoviesItems';
import { useEffect, useState } from "react"

const MoviesList = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function getMovies () {
            try {
              
                const movi = await getTopMovies();
                setMovies([...movi.results]);
            } catch (error) {
                console.error('dcvrvfinvhbvibdsiyvbf')
            }
        }
        getMovies()
},[movies])
   
  return (
    <div>
      <ul>
        {movies.map(movie => (
         <MoviesItems movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default MoviesList