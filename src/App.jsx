import { Route, Routes } from "react-router-dom"
import Read from "./pages/Read"
import Listen from "./pages/Listen"
import NotFound from "./pages/NotFound"
import Header from "./components/Header"
import Surah from "./pages/Surah"
import { getSurahsReading} from "./appData/surahsReading"
import { SurahsForReadingContext } from "./contexts/SurahsForReadingContext"
import { useEffect, useState } from "react"



function App() {
  const [quran,setQuran] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
         const surahs = await getSurahsReading()
         setQuran(surahs)
    }
    fetchData()
  },[])
  
  
  return (
    <SurahsForReadingContext.Provider value={quran}>

    <div className=" h-screen overflow-hidden ">
      <Header/>

        <Routes>
          <Route index element={<Read/>}/>
          <Route path="/listen" element={<Listen/>}/>
          <Route path="/surah/:surahName" element={<Surah/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
    </SurahsForReadingContext.Provider>

  )
}

export default App
