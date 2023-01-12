import { type NextPage } from "next";
import Navbar from "../components/navbar";
import Intro from "../components/Intro";
import ProjectList from "../components/ProjectList";
import React, { useState, useEffect } from 'react';
import { Contactus } from "../components/ContactUs";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  
  return (
    <>
{loading ? (


  <div className=" body ">
    <div className="content">
    <h2 className="text_shadows  ">hey</h2>
    </div>
  </div>

) : ( 

  <div className="bg-lightYellow min-h-screen px-10 py-9 test flex flex-col items-center  ">
        <Navbar/>
        <Intro  />
        <ProjectList/>
        <Contactus />
      </div>
      ) }
      
    </>
  );
};

export default Home;

