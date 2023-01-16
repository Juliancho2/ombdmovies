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
  console.log(Poster)

  return (
    <Link className='movie-container' to={`/movie/${imdbID}`} >
      <figure >
        <div style={{ backgroundImage: `url("${Poster !== 'N/A'?Poster:'https://media.istockphoto.com/vectors/error-document-icon-vector-id1060550172?k=6&m=1060550172&s=612x612&w=0&h=gdWxz8H1C8PaxEKF_ItZfo_S-cbQsxC415_n5v9irvs='}") `,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat" }}>
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
