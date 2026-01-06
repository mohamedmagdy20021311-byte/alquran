import CardsReadingContainer from "../components/CardsReadingContainer"


function Read() {
  return (
    <div>
      <div className=" py-5 mx-auto flex flex-col justify-center items-center max-h-screen overflow-hidden ">
        <h1 className=" text-2xl font-bold md:text-3xl 2xl:text-4xl">اقرأ القرآن الكريم</h1>
        <p className=" text-xl md:text-2xl 2xl:text-3xl md:mt-2">اختر سورة للقراءة</p>
      </div>

      <CardsReadingContainer/>
    </div>

  )
}

export default Read