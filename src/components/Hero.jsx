import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import photo from "../assets/photo.png";

const Hero = () => {
  const [jobTitle, setJobTitle] = useState("Designer");
  const jobTitles = ["Designer", "Web Developer", "Software Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % jobTitles.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const jobTitleToType = jobTitles[index];
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < jobTitleToType.length) {
        setJobTitle(jobTitleToType.slice(0, i + 1));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 200);
    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div id="Home" className="relative h-screen bg-gradient-to-t from-dark-blue to-darker-blue">
      <Navbar />
      <div className="flex flex-row justify-center items-center h-full">
        <div className="flex flex-col flex-wrap w-2/3 justify-center items-start pl-12 pr-24">
          <div className="font-roboto font-medium text-xl text-gray-400 pl-1">
            Hello!
          </div>
          <div className="mt-2 font-normal text-6xl text-white">
            I'm a&nbsp;
            <span className="font-bold">
                {jobTitle}
            </span>
            <span>|</span>
          </div>

          <p className="mt-4">
          I am a student of computer science and design with experience in front-end development, data structures, and algorithms. I have a passion for creating visually appealing and interactive web experiences. 
          </p>
        </div>
  
        <div className="w-1/3">
          <img className="absolute right-0 bottom-0 origin-bottom -mr-6 md:mr-14 lg:mr-16 scale-75 md:scale-100 lg:scale-110 h-3/4" src={photo} alt="photo" />
        </div>
      </div>
    </div>
  );
  
};

export default Hero;
