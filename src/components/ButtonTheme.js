import React, {useState, useEffect} from "react";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';

function ButtonTheme() {

    const [theme, setTheme]= useState("light");
    localStorage.setItem('ourTheme',theme);

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    },[theme]);

    const handleThemeSwitch = () =>{
        setTheme(theme === 'dark'?'light':'dark');
            localStorage.setItem('ourTheme',theme);     
    }

  return (
    <div>
      <button
        className="bg-slate-200 dark:bg-slate-400 p-3 m-2 rounded-2xl"
        onClick={handleThemeSwitch}
      >
        {theme === 'light'? <NightsStayIcon/> : <LightModeIcon/>}
      </button>
    </div>
  );
}

export default ButtonTheme;
