import React from 'react'
import Movie from './Movie';
import './listmovies.css'
import Loader from './Loader';

const ListMovies = ({data,loading}) => {
  if(!data)return null;
  const {Search}=data;
  return (
    <div className='list-movies'>
      {
       !Search?<h2 >No se encontro la busqueda :(</h2>:
        Search.map(movie=>(
          <Movie key={movie.imdbID} movie={movie} />
        ))
      }
    </div>
  )
}

export default ListMovies
