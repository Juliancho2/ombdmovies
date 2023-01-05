import React from 'react'
import './navpagination.css'

export const NavPagination = ({numberPage,setNumberPage}) => {
    return (
        <div className='nav-pagination'>
           {
            numberPage > 2?<button  type="submit" onClick={()=>setNumberPage(prev=>prev - 1)}>Anterior</button>:""
           }
           <button type="submit" onClick={()=>setNumberPage(prev=>prev + 1)}>Siguiente</button>
        </div>
    )
}
