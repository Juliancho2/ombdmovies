import React from 'react'
import './navpagination.css'

export const NavPagination = ({numberPage,handleFormerPage,handleNextPage}) => {
    const MIN_PAGE=2;
    return (
        <div className='nav-pagination'>
           {
            numberPage > MIN_PAGE?<button  type="submit" onClick={handleFormerPage}>Anterior</button>:""
           }
           <button type="submit" onClick={handleNextPage}>Siguiente</button>
        </div>
    )
}
