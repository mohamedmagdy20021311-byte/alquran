function ReadSurahCard({name,location,numberOfAyat}) {
  return (
    
    <div className="  mx-auto h-20 py-2 my-2 bg-background rounded-xl w-full md:h-fit">
        <p className=" text-2xl font-semibold text-center  md:text-3xl">{name}</p>
        <div className=" text-2xl flex justify-around md:text-3xl md:mt-8">
            <p>{location}</p>
            <p>اياتها {numberOfAyat}</p>
        </div>

    </div>
  )
}

export default ReadSurahCard