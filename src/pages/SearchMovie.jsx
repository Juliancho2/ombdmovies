import React from 'react'
import { useParams } from 'react-router-dom'
import { HeaderMovie } from '../components/HeaderMovie'
import ListMovies from '../components/ListMovies';
import Loader from '../components/Loader';
import { useFetch } from '../hooks/useFetch';

export const SearchMovie = () => {
  
  const {id}=useParams();
  const { data, error, loading }=useFetch(`https://www.omdbapi.com/?&apikey=7c2ed653&s=${id}`);
  return (
    <div style={{paddingTop:"100px"}}>
      <div style={{textAlign:"center"}}>
        <h3 style={{textAlign:"center"}}>Resultados de "{id}"</h3>
        {loading && <Loader/>}
        {error&&<h2 style={{color:"white", margin:0,padding:"80px", textAlign:"center",fontSize:"3rem"}}>{error.statusText} {error.status}</h2>}
        <ListMovies data={data} />
      </div>

    </div>
  )
}
