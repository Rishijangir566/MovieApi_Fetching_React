/* eslint-disable no-undef */
import { useState ,useEffect} from "react"
import axios from "axios"
function Popular() {
    const [showdata , setShowData] = useState("")


  const API_KEY = import.meta.env.VITE_API_KEY
   const img_base_path="https://image.tmdb.org/t/p/original"

async function togglemovie(){
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${API_KEY}`)
    setShowData(response.data.results)
    console.log(response.data.results);
}
async function toggletvshow(){
  const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?language=en-US&api_key=${API_KEY}`)
  setShowData(response.data.results)
  console.log(response.data.results);
}

useEffect(()=>{
    togglemovie()
  },[])
  

  return (
    <div>
      <button onClick={togglemovie}>Popular Movies </button>
      <button onClick={toggletvshow}>Popular Tv Show  </button>
      <div className="show">
          
          {showdata.length > 0 &&
            showdata.map((item)=>{
            return(
               <div className="imges" key={item.id}>
                <img src={img_base_path+item.poster_path} alt="" />
                <h3>{item.title}</h3>
                <h5>{new Date(item.release_date).toDateString() || new Date(item.first_air_date).toDateString()}</h5>
               </div>
            )
          })

           }
      </div>
    </div>
  )
}

export default Popular
