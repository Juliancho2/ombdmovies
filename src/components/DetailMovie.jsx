import React from 'react'

const DetailMovie = ({data}) => {
  return (
    <div className='detail-movie' style={{marginBottom:"40px"}}>
        <h2>{data.Title}</h2>
        <div className='container-img'>
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className='description-movie'>
          <h4><b style={{color:"darkcyan"}}>Synopsis:</b> {data.Plot}</h4>
          <h4><b style={{color:"darkcyan"}}>Genre:</b> {data.Genre}</h4>
          <p><b style={{color:"darkcyan"}}>Director:</b> {data.Director}</p>
          <p><b style={{color:"darkcyan"}}>Country:</b> {data.Country}</p>
          <p><b style={{color:"darkcyan"}}>Type:</b> {data.Type}</p>
          <p><b style={{color:"darkcyan"}}>Runtime:</b> {data.Runtime}</p>
          <small><b style={{color:"darkcyan"}}>Year:</b> {data.Year}</small>
        </div>
      </div>
       
  )
}

export default DetailMovie
