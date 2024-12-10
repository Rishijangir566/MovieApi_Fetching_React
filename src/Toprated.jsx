/* eslint-disable no-undef */
import { useState ,useEffect} from "react"
import axios from "axios"
function Toprated() {
    const [showdata , setShowData] = useState("")


  const API_KEY = import.meta.env.VITE_API_KEY
   const img_base_path="https://image.tmdb.org/t/p/original"

async function topratedmovie(){
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=${API_KEY}`)
    setShowData(response.data.results)
    // console.log(response.data.results);
}
async function topratedtvshow(){
  const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&api_key=${API_KEY}`)
  setShowData(response.data.results)
  // console.log(response.data.results);
}


useEffect(()=>{
    topratedmovie()
  },[])
  

  return (
    <div>
      <button onClick={topratedmovie}>Top Rated Movies </button>
      <button onClick={topratedtvshow}>Popular Tv Show  </button>
      <div className="show">
          
          {showdata.length > 0 &&
            showdata.map((item)=>{
            return(
               <div className="imges" key={item.id}>
                <img src={img_base_path+item.poster_path} alt="" />
                <h3>{item.title}</h3>
                <h5>{item.release_date ? new Date(item.release_date).toDateString() : new Date(item.first_air_date).toDateString()} </h5>
                                </div>
            )
          })

           }
      </div>
    </div>
  )
}

export default Toprated
