/* eslint-disable no-unused-vars */
import axios from 'axios'
import "./App.css"
import DayWeek from './DayWeek.jsx'
import Popular from './Popular.jsx'
import Toprated from './Toprated.jsx'
import BackImg from './BackImg.jsx'

function App() {
 

  return (
    <>
    <BackImg/>
   <DayWeek/>
  <Popular/>
  <Toprated/>
    </>
 
  )
}

export default App
