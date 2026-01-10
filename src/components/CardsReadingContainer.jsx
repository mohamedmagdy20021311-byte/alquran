import { Link } from "react-router-dom"
import ReadSurahCard from "./ReadSurahCard"
import { useContext } from "react"
import { SurahsForReadingContext } from "../contexts/SurahsForReadingContext"

function CardsReadingContainer() {
const surahs = useContext(SurahsForReadingContext)

  return (
    <div className=" bg-header px-2 mt-5 w-[90%] mx-auto rounded-2xl h-[67vh] overflow-y-scroll no-scrollbar
 md:grid md:grid-cols-2 md:gap-x-3 md:h-[fit] 2xl:grid-cols-3  2xl:max-h-[62vh] xl:py-2">
       {!surahs?<p>....جاري تحميل السور</p>:surahs.map((surah)=>{
        return(
          <Link to={`/surah/${surah.nameInEnglish}`} key={surah.name}>
            <ReadSurahCard  name={surah.name} location={surah.location} numberOfAyat={surah.numberOfAyat}/>
        </Link>
       )})}
    </div>
  )
}

export default CardsReadingContainer