/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { useState ,useEffect} from "react"
import axios from "axios"
function DayWeek() {
    const [showdata , setShowData] = useState([])
    const [genre,setgenre] = useState([])
  const [ids,setids]=useState([])
    const [matchGenre,setmatchgere]= ("")

  const API_KEY = import.meta.env.VITE_API_KEY
   const img_base_path="https://image.tmdb.org/t/p/original"

async function toggleday(){
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`)
    setShowData(response.data.results)
    // console.log(response.data.results);
}

async function toggleweek(){
  const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${API_KEY}`)
  setShowData(response.data.results)
  // console.log(response.data.results);
}

async function Genre() {
  const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${API_KEY}`)
  setgenre(response.data.genres)
  console.log(response.data.genres);
}



function showingGenre(id){
console.log("not done");
}
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
                <div className="imges" key={item.id}>
                <img src={img_base_path+item.poster_path} alt="" />
                <h3>{item.title}</h3>
                <h5>{new Date(item.release_date).toDateString()}</h5>
                <p key={showingGenre(item.genre_ids)}>{}</p>
               </div>
            )
          })
           }
           
           
      </div>
    </div>
  )
}

export default DayWeek
