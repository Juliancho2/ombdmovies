import { Routes,Route, useNavigate } from 'react-router-dom';
import './App.css';
import DetailsMovies from './pages/DetailsMovies';
import { Home } from './pages/Home';
import { SearchMovie } from './pages/SearchMovie';
import { useFetch } from './hooks/useFetch';
import {  useState } from 'react';
import { HeaderMovie } from './components/HeaderMovie';

const initialSearch="movies";

function App() {
  const [searchMovie,setSearchMovie]=useState("");
  const [numberPage,setNumberPage]=useState(2);
  const { data, error, loading }=useFetch(`https://www.omdbapi.com/?&page=${numberPage}&apikey=7c2ed653&s=${initialSearch}`);

  const navigate=useNavigate();
  const handleChange=(e)=>setSearchMovie(e.target.value);
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/search/${searchMovie}`);
    setSearchMovie("");
  }
  const redirectHome=()=>{
    navigate('/');
    setNumberPage(2);
  }

  return (
    <div className="App">
      <HeaderMovie 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchMovie={searchMovie}
        setNumberPage={setNumberPage}
        redirectHome={redirectHome}
        /> 
      <Routes>
        <Route path='/' element={<Home data={data} loading={loading} error={error} numberPage={numberPage} setNumberPage={setNumberPage}/>} />
        <Route path='/movie/:id' element={<DetailsMovies  />}/>
        <Route path='/search/:id' element={<SearchMovie  />}/>
        <Route path='*' element={<h1 style={{paddingTop:"80px",margin:0,color:"white",textAlign:"center"}}>Not found 404</h1>}/>
      </Routes>
      
    </div>
  )
}

export default App
