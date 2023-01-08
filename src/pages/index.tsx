import { type NextPage } from "next";
import Navbar from "../components/navbar";
import Intro from "../components/Intro";


const Home: NextPage = () => {


  return (
    <div   className="bg-[#FBF8CC] h-screen p-10 ">
      <Navbar/>
      <Intro />

    </div>
  );
};

export default Home;
