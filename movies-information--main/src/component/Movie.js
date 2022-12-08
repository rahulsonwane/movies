import React from 'react'
import Moviinfo from './Moviinfo'

export default function Movie(
  {Poster,Title,Type,Year,imdbID},{key}) {

  return (
    <div className='movie' key={key}>
    <img src={Poster!=="N/A"?Poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UGMSZw_Dy369sIc1PqCogZqscqcea0wRlA&usqp=CAU"} alt={Title}  />
    <div className="movie-info">
      <h3>{Title} </h3>
      <span >{Type}</span>
   </div>
   <div className="movie-over">
     <h3>Overview:</h3>
     <Moviinfo movieid={imdbID}/>
   </div>
    </div>
  )
}

