
import MoviesItems from 'components/MoviesItems/MoviesItems';

import { List, PageTitle } from './MoviesList.styled';




const MoviesList = ({movies}) => {
 
  return (
    <div>
      <PageTitle>Trading today</PageTitle>
      <List>
        {movies.map(movie => (
          <>
           
              <MoviesItems movie={movie} />
           
          </>
        ))}
      </List>
    </div>
  );
}

export default MoviesList