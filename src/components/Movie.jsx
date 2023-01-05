import React from 'react'
import './movie.css'
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {
  const {
    Title,
    Poster,
    imdbID,
    Year
  } = movie;

  return (
    <Link to={`/movie/${imdbID}`} >
      <figure >
        <div style={{ backgroundImage: `url("${Poster}") `,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat" }}>
        </div>
        <figcaption>
          {Title}
          <br/>
          {Year}
          </figcaption>
      </figure>
    </Link>
  )
}

export default Movie
