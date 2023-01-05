import React from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import './detailmovie.css';
import { useFetch } from '../hooks/useFetch';

const DetailsMovies = () => {
  const { id } = useParams();
  const { data, error, loading }=useFetch(`https://www.omdbapi.com/?i=${id}&apikey=7c2ed653`);

  return (
    <div className='details-movies'>
      {error&&<h2 style={{color:"white", margin:0,padding:"80px", textAlign:"center",fontSize:"3rem"}}>{error.statusText} {error.status}</h2>}
      {loading && <Loader/>}
      {data&&(
        <div className='detail-movie'>
        <div className='container-img' style={{backgroundImage:`url("${data.Poster}")`,backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>

        </div>
        <div className='description-movie'>
          <h2>{data.Title}</h2>
          <p>{data.Plot}</p>
          <p>{data.Type}</p>
          <small>{data.Year}</small>
        </div>
      </div>
      )}
      

    </div>
  )
}

export default DetailsMovies
