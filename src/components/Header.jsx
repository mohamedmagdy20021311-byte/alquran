import { useEffect, useState } from "react"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link } from "react-router-dom";

function Header() {
    const [isDark,setIsDark] = useState(()=>{
        return localStorage.getItem("theme") === "dark"
    })
    function handleTheme(){
        setIsDark(!isDark)

    }

useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  } else {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }
}, [isDark])

  return (
    <div className="bg-header border border-border flex items-center justify-between py-5 px-2 text-3xl md:px-5 md:text-4xl lg:text-5xl ">
        <p>القرآن الكريم</p>
        <div className=" flex gap-1 flex-row-reverse md:gap-3 lg:gap-5">
            <button title={isDark?"الوضع الفاتح":"الوضع الداكن"} className=" cursor-pointer text-icon-color bg-icon-background hover:opacity-85  size-14 rounded-full shadow-2xl shadow-purple-500  transition-all duration-300 "
            onClick={handleTheme}> {isDark?<LightModeIcon sx={{fontSize: 40}}/>:<DarkModeIcon sx={{fontSize: 40}}/>} </button>
           <Link to="/"> <button  className=" text-[#fcf7f8] cursor-pointer  hover:bg-button  text-[40px] size-14 rounded-full shadow-2xl  transition-all duration-300 bg-checked "> <AutoStoriesIcon  fontSize="inherit"/> </button></Link>
           <Link to="/listen"> <button  className=" text-[#fcf7f8] cursor-pointer   hover:bg-button  text-[40px] size-14 rounded-full shadow-2xl  transition-all duration-300 bg-checked "> <HeadphonesIcon    fontSize="inherit"/> </button> </Link>
        </div>
        </div>
  )
}

export default Header