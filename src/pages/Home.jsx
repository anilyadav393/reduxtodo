import { useEffect, useState } from "react";
import image2 from "../assets/image2.png"
import Navbar from "../components/Navbar";

const Home = () => {
  // const [text, setText] = useState("");
  // const fullText = "Welcome to Jobby! Find your dream job easily.";

  // Typing animation effect
  // useEffect(() => {
  //   let index = 0;
  //   const intervalId = setInterval(() => {
  //     setText((prev) => prev + fullText[index]);
  //     index += 1;
  //     if (index === fullText.length) {
  //       clearInterval(intervalId);
  //     }
  //   }, 100); // typing speed

  //   return () => clearInterval(intervalId);
  // }, []);



  return (
    <>
    <Navbar />
    
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 bg-gradient-to-r from-gray-800 to-black">
      
      {/* Left Section - Text */}
      <div className="flex-1 text-center md:text-left space-y-3 text-white">
        <h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text py-3 bg-gradient-to-r from-yellow-400 to-red-600 animate-bounce mt-10">
        Find The Job That Fits Your Life
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-medium">
          We offer the best opportunities to help you achieve your career goals.
        </p>
        <p className="text-base md:text-lg text-gray-400">
        Millions of people are searching for jobs, salary information, company reviews. Find the job that fits your abilities and potential.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="ml-auto ">
        <img
          src={image2}
          alt="Job Search"
          className="object-cover min-h-[400px] w-auto rounded-lg shadow-xl"
        />
      </div>
    </div>
    </>
  );
};

export default Home;
