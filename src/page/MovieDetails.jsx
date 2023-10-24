import React from 'react'
import { useParams } from 'react-router-dom'
const MovieDetails = () => {
    const {id} = useParams()
  return <div>`Info for movie {id}</div>;
}

export default MovieDetails