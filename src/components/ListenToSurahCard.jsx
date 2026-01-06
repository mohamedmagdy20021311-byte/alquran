
function ListenToSurahCard({audioRef,onPlayCapture,index,src,name,location,numberOfAyat}) {
  return (

    <div className="  mx-auto h-34 my-2 flex flex-col items-center justify-around pb-3 bg-background rounded-xl w-full xl:h-full">
        <p className=" text-2xl font-semibold text-center  md:text-3xl mt-0.5">{name}</p>
        <div className=" text-2xl flex w-full justify-around  md:text-3xl mb-1 ">
            <p>سورة {location}</p>
            <p>اياتها {numberOfAyat}</p>
        </div>
<audio
  ref={audioRef}
  src={src}
  controls
  onPlayCapture={() => onPlayCapture(index)}
  className="w-full  px-4 md:px-10 accent-amber-900!"
  
/>


    </div>
  )
}

export default ListenToSurahCard