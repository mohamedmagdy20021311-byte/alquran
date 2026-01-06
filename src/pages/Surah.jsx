import { useContext } from "react"
import { useParams } from "react-router-dom"
import { SurahsForReadingContext } from "../contexts/SurahsForReadingContext"
function Surah() {
    const {surahName} = useParams()
    const surahs = useContext(SurahsForReadingContext)
    const surah = surahs.find((s)=>{
      return s.nameInEnglish === surahName
    })

    if (!surah) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-2xl amiri">جاري تحميل السورة...</p>
            </div>
        );
    }
    return (
    <div className={` no-scrollbar w-[95%] pb-2  rounded-2xl bg-header mx-auto mt-5 max-h-[80vh]   overflow-y-scroll `}>
      <div className=" flex justify-around mb-2  border-b rounded-2xl p-2 sticky top-0 z-10 bg-header 2xl:p-4">
        <p className=" text-xl mt-3 2xl:text-3xl">{surah.location}</p>
        <p className=" text-3xl font-bold 2xl:text-6xl">{surah.name}</p>
        <p className=" text-xl mt-3 2xl:text-3xl">اياتها {surah.numberOfAyat}</p>
      </div>
      <div className={` px-3 pt-1 ${surah.name === "الفاتحة"?"leading-20 text-4xl xl:leading-24 ":"text-xl leading-12 xl:leading-20"}  amiri    `}>
          <p className="row text-4xl  text-center 2xl:text-5xl my-3 ">{surah.basmala}</p>
          <div className=" md:text-2xl text-justify 2xl:text-3xl md:leading-11 2xl:leading-13 " >{surah.ayat}</div>
      </div>
    </div>
  )
}

export default Surah