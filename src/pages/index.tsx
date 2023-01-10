import { type NextPage } from "next";
import Navbar from "../components/navbar";
import Intro from "../components/Intro";
import ProjectList from "../components/ProjectList";
import React, { useState, useEffect } from 'react';



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


  <div className="body">
    <div className="content">
    <h2 className="text_shadows">hey</h2>
    </div>
  </div>

) : ( 
  <div className="bg-[#FBF8CC] min-h-screen p-10 test ">
        <Navbar/>
        <Intro  />
        <ProjectList/>
      </div>
      ) }
      



     
    </>
  );
};

export default Home;

