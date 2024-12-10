
import { useState ,useEffect} from "react"
import axios from "axios"
function BackImg() {
    const [showdata , setShowData] = useState("")


  const API_KEY = import.meta.env.VITE_API_KEY
   const img_base_path="https://image.tmdb.org/t/p/original"

async function back(){
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`)
    setShowData(response.data.results)
    console.log(response.data.results);
}

 function getrandom (){
  return Math.floor(Math.random()*showdata.length)
 }


useEffect(()=>{
    back()
  },[])
  

  return (
    <div>
         
                <div className="back" key={showdata.id}>
                  <img src={img_base_path+showdata[getrandom].backdrop_path} alt="" />
                     
                 </div> 

             
          
     
     
    </div>
  )
}

export default BackImg
