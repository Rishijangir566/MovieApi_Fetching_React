/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { useState ,useEffect} from "react"
import axios from "axios"
function DayWeek() {
    const [showdata , setShowData] = useState([])

    const [genre,setGenre] = useState([])
 

  const API_KEY = import.meta.env.VITE_API_KEY
   const img_base_path="https://image.tmdb.org/t/p/original"

async function toggleday(){
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`)
    setShowData(response.data.results)
}

async function toggleweek(){
  const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${API_KEY}`)
  setShowData(response.data.results)
}

async function Genre() {
  const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${API_KEY}`)

  setGenre(response.data.genres)
  console.log(response.data.genres);
}


function getGenre(genreArr){
return genreArr.map((id)=>{
const genreObj=genre.find((g)=>g.id===id);
return genreObj ? genreObj.name : null;
})
.filter(Boolean)
.join(", ");
}










useEffect(()=>{
    toggleday()
    Genre()
  },[])
  
  return (
    <div>   
                                                           
      <button onClick={toggleday}>day </button>
      <button onClick={toggleweek}>week  </button>
      <div className="show">
          
          {showdata.length > 0 &&
            showdata.map((item)=>{
              return(

                <div className="images" key={item.id}>
                <img src={img_base_path+item.poster_path} alt="" />
                <h3>{item.title || item.name || item.original_title}</h3>
                <h5>{item.release_date ? new Date(item.release_date).toDateString() : new Date(item.first_air_date).toDateString()}</h5>
                <p>{getGenre(item.genre_ids)}</p>

               </div>
              
                
            )
          })
           }
           
           
      </div>
    </div>
  )
}

export default DayWeek
