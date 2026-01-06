import CardsListeningContainer from "../components/CardsListeningContainer"
import { useState } from "react"

function Listen() {
    const [receiter,setReceiter] = useState("afasy")
  
  return (
    <div>
        <div className=" py-2 mx-auto flex flex-col justify-center items-center max-h-screen overflow-hidden ">
            <h1 className=" text-2xl font-bold md:text-3xl 2xl:text-4xl">استمع للقرآن الكريم</h1>
            <p className=" text-xl md:text-2xl 2xl:text-3xl md:mt-2">اختر سورة للاستماع</p>
      </div>
        <div className="flex justify-center gap-2 items-center">
          <p className=" text-xl xl:text-2xl"> بصوت القارئ : </p>
          <select value={receiter} onChange={(e)=>setReceiter(e.target.value)} className=" bg-header rounded-full p-1 text-xl ">
            <option value="afasy">مشاري راشد العفاسي</option>
            <option value="menshawy">محمد صديق المنشاوي</option>
            <option value="abdulbasit">عبدالباسط عبدالصمد</option>
          </select>
        </div>
      <CardsListeningContainer receiter={receiter}/>
    </div>
  )
}

export default Listen