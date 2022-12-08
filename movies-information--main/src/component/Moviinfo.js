import React, { useEffect,useState } from 'react'
import axios from "axios"
function Moviinfo({movieid}) {
    const API_KEY = "a9118a3a";
    const[selectinfo,setSelectinfo]=useState([])
    const MOVIEID=movieid
    useEffect(()=>{
        const fetchData = async (searchString) => {
        const response = await axios.get(`https://www.omdbapi.com/?i=${searchString} &apikey=${API_KEY}`);
           console.log(response.data,"lllllllllllllllllll")
            setSelectinfo([response.data])
         
          };
         fetchData (MOVIEID)
       
         },[])
 console.log(selectinfo,"d")
 const rating=(vote)=>{
    if(Math.ceil(vote)>8){
      return "green"
    }else if(Math.ceil(vote)>6){
      return "orange"
    }else{
      return "red"
    }
     }
  return (<>

{
    selectinfo?.length?
    <div className='movieinfo'>
        <div>  <h4>Title :<span>{selectinfo[0].Title}</span>  </h4>           </div>
        <div>  <b>Countr :</b>    <span>{selectinfo[0].Country}</span>     </div>
        <div>  <b>Language :</b>   <span>{selectinfo[0].Language}</span>    </div>  
        <div>  <b>Released :</b>   <span>{selectinfo[0].Released}</span>    </div>
       <div>   <b>Runtime :</b>    <span>{selectinfo[0].Runtime}</span>  </div>
        
        <div>  <b>Overview :</b>   <span>{selectinfo[0].Plot}</span>        </div>
        <div>  <b>Actors :</b>     <span>{selectinfo[0].Actors}</span>      </div>
  
        <div className={`tag ${rating(selectinfo[0].imdbRating)}`}>  <b>Rating : </b> <span >{selectinfo[0].imdbRating}</span>  </div>
      </div>
      : <div>data is not found</div>

}


      
       
      </>
      
   
  )
}

export default Moviinfo