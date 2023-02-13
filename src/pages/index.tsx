import { type NextPage } from "next";
import Navbar from "../components/navbar";
import Intro from "../components/Intro";
import ProjectList from "../components/ProjectList";
import React, { useState, useEffect } from 'react';
import { Contactus } from "../components/ContactUs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Stack from "../components/Stack";
import dynamic from 'next/dynamic'
const Specs = dynamic(() => import('../components/ProjectList'), {ssr: false})


const Home: NextPage = () => {
const [theme, setTheme] = React.useState("light");
const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    AOS.init({once: true});

    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }

    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };



  
  return (
    <>
{loading ? (


  <div className=" body ">
    <div className="content">
    <h2 className="text_shadows  ">hey</h2>
    </div>
  </div>

) : ( 

  <div className="bg-lightYellow dark:bg-[#232300] min-h-screen px-10 py-9 test flex flex-col items-center  ">
        <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch}/>
        <Intro  />
        <ProjectList/>
        <Stack/>
        <Contactus />
      </div>
      ) }
      
    </>
  );
};

export default Home;

