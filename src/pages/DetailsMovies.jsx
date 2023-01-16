import React from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import './detailmovie.css';
import { useFetch } from '../hooks/useFetch';
import DetailMovie from '../components/DetailMovie';

const DetailsMovies = () => {
  const { id } = useParams();
  const { data, error, loading }=useFetch(`https://www.omdbapi.com/?i=${id}&apikey=7c2ed653`);
  
  return (
    <div className='details-movies' style={{margingBottom:"200px"}}>
      {error&&<h2 style={{color:"white", margin:0,padding:"80px", textAlign:"center",fontSize:"3rem"}}>{error.statusText} {error.status}</h2>}
      {loading && <Loader/>}
      {
        data && <DetailMovie data={data}/>
      }
    </div>
  )
}

export default DetailsMovies
