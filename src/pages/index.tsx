import { type NextPage } from "next";
import Navbar from "../components/navbar";
import Intro from "../components/Intro";
import ProjectList from "../components/ProjectList";


const Home: NextPage = () => {


  return (
    <div   className="bg-[#FBF8CC] min-h-screen p-10 ">
      <Navbar/>
      <Intro  />
      <ProjectList/>

    </div>
  );
};

export default Home;
