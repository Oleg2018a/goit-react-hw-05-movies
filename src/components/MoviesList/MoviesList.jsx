
import MoviesItems from 'components/MoviesItems/MoviesItems';

import { List, PageTitle, StyleLink } from './MoviesList.styled';


const MoviesList = ({movies}) => {
 
   
  return (
    <div>
      <PageTitle>Trading today</PageTitle>
      <List>
        {movies.map(movie => (
          <>
            <StyleLink to={`/movies/${movie.id}`}>
              <MoviesItems movie={movie} />
            </StyleLink>
          </>
        ))}
      </List>
    </div>
  );
}

export default MoviesList