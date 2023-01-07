import React from 'react';
import ListMovies from '../components/ListMovies';
import Loader from '../components/Loader';
import { NavPagination } from '../components/NavPagination';


export const Home = ({data,error, loading,numberPage,handleFormerPage,handleNextPage}) => {
  
  return (
    <div className='home' style={{textAlign:"center"}}>
        {loading && <Loader/>}
        <ListMovies  data={data}/>
        {error&&<h2 style={{color:"white", margin:0,padding:"80px", textAlign:"center",fontSize:"3rem"}}>{error.statusText} {error.status}</h2>}
        {data&& (<NavPagination data={data} numberPage={numberPage} handleFormerPage={handleFormerPage} handleNextPage={handleNextPage}/>)}
    </div>
  )
}
