import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchMovies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name') ?? ''

    const hendleSubmit = e => {
        e.preventDefault()
        const form = e.currentTarget
        setSearchParams({ name: form.elements.name.value });
        form.reset();
    }
    return (
     
        <form onSubmit={hendleSubmit}> 
            <p>Search movies</p>
            <input type="text"
                name='name'
            />
            <button type='submit'>Send</button>
            <p>{name}</p>
            
    </form>
  )
}

export default SearchMovies