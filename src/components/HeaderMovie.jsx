import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './headermovie.css';
const HeaderMovie = ({ handleChange, handleSubmit, searchMovie, redirectHome }) => {

  return (
    <header onSubmit={handleSubmit} >
      <nav>
        <h3 onClick={redirectHome}>OmdbMovies</h3>
        <form>
          <input type="text" name="" id="" onChange={handleChange} value={searchMovie} placeholder="Buscar..." />
          <button><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
        </form>
      </nav>

    </header>
  )
}

export { HeaderMovie }
