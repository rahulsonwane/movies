import React, { useEffect, useState } from 'react'
import Movie from './component/Movie'
import axios from "axios"


function App() {
  const API_KEY = "a9118a3a";

const [movies,setMovies]=useState([])
const[search,setSearch]=useState()
const [timeoutId, updateTimeoutId] = useState();


 
const fetchData = async (searchString) => {
  const response = await axios.get(`https://www.omdbapi.com/?s=${!searchString?"Home":searchString}&apikey=${API_KEY}`,);
 
  setMovies(response.data.Search);
 

};


useEffect(()=>{
   clearTimeout(timeoutId);
 const timeout = setTimeout(() => fetchData( search ), 100);
 updateTimeoutId(timeout);

},[search])



function handlesearch(e){
console.log(e.target.value)
 setSearch(e.target.value);

}

 const handleOnsubmit=(e)=>{
e.preventDefault()

 }

  return (
    <>
 
<header>

<form onSubmit={handleOnsubmit}>

<input className="search" type="text" placeholder="search" value={search} onChange={handlesearch} />
<select className='select' value={search} onChange={handlesearch}>
<option >select-movies</option>
        <option value="Hollywood">Hollywood</option>
        <option value="Bollywood">Bollywood</option>
        <option value="Tollywood">Tollywood</option>
      </select>

</form>
   
   
    </header>
    <h4> <marquee  direction="left">movie information</marquee></h4>
<div className='movie-container'>
   
</div>


    <div className='movie-container'>
    
    {movies?.length?
      movies
      .map((movie)=>
        <Movie key={movie.id} {...movie}/>
    
      )
      : <div>movie is not found</div>
    }
   
    
    </div>
    </>
    
  )
}

export default App