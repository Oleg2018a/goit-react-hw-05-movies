
import { useState } from 'react';
import { Button, Form, Input, MovieWrapper, Title } from './SearchMovies.styled';


const SearchMovies = ({ setMovieSearch }) => {

  const [query, setQuery] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault();
    setMovieSearch(query);
  
    };
      const handleChange = ({ target: { value } }) => {
        setQuery(value);    
      
  };



  return (
    <>
      <MovieWrapper>
        <Title>Search movies</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            type="text"
            name="query"
            value={query}
          />
          <Button type="submit">Send</Button>
        </Form>
      </MovieWrapper>
    </>
  );
};

export default SearchMovies