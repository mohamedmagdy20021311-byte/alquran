import ListenToSurahCard from "./ListenToSurahCard"
import { useRef, useState } from "react"
import { generateSurahAudio } from "../audioData"





function CardsListeningContainer({receiter}) {

  const audioRefs = useRef([])
  const [currentIndex, setCurrentIndex] = useState(null)


  const surahs = generateSurahAudio(receiter)

  function handlePlay(index) {
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) {
        audio.pause()
        audio.currentTime = 0
      }
    })
    setCurrentIndex(index)
  }

  return (
    
    <div
      className="
        bg-header px-2 mt-2 w-[90%] mx-auto rounded-2xl
        h-[65vh] overflow-y-scroll no-scrollbar
        xl:grid xl:grid-cols-2 md:gap-3 md:h-[75vh]
        2xl:grid-cols-3 2xl:h-[62vh] xl:pb-4
      "
    >

      {surahs.map((surah, index) => {return (
        <ListenToSurahCard
          key={index}
          src={surah.audioUrl}
          name={surah.surahName.arabic}
          location={surah.surahName.type}
          numberOfAyat={surah.surahName.ayahs}
          index={index}
          audioRef={(el) => (audioRefs.current[index] = el)}
          onPlayCapture={handlePlay}
        />
      )})}
    </div>
  )
}

export default CardsListeningContainer
