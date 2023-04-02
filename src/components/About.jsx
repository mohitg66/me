import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

const overview = {
  title: "Overview",
  description:
    "I am a computer science student at IIITD. My passion for coding and problem-solving has led me to develop expertise in object-oriented programming, data structures, algorithms, and front-end development. I am proficient in Java, C, Python, and JavaScript, and have hands-on experience in tools like Git, HTML, CSS, Tailwind CSS, Figma, and Adobe Illustrator. Throughout my academic journey, I have undertaken challenging projects that have allowed me to apply my theoretical knowledge to real-world problems.",
  expertise: [
    {
      title: "Software Development",
      description:
        "I have a strong foundation in software development principles and am experienced in writing clean, maintainable code. I am proficient in many of the programming languages.",
    },
    {
      title: "Web Development",
      description:
        "I have a solid understanding of front-end web development technologies like HTML, CSS, and JavaScript, as well as popular web frameworks like React.",
    },
    {
      title: "UI/UX Design",
      description:
        "I have a keen eye for design and am proficient in tools like Figma and Adobe Illustrator. I understand the importance of creating user-friendly interfaces.",
    },
  ],
};

const About = () => {
  return (
    <div
      id="About"
      className="relative min-h-screen bg-gradient-to-b from-dark-blue to-darker-blue px-14 py-14"
    >
      <h4 className="font-roboto font-thin text-gray-400 text-sm mb-1 mx-1">INTRODUCTION</h4>
      <h2 className="font-semibold text-6xl mb-6">Overview</h2>
      <p className="font-sans mb-10">{overview.description}</p>

      <div className="flex flex-row justify-between gap-6 box-border max-w-screen-md">
        {overview.expertise.map((element) => {
          return (
            <Tilt
              className="bg-gradient-to-tr from-slate-900 to-slate-700 p-1 rounded-lg shadow-xl w-1/3"
            //   options={{
            //     // max: 25,
            //     // perspective: 1000,
            //     // scale: 1.05,
            //   }}
            >
              <motion.div
                className="flex flex-col justify-center items-center h-full w-full p-4 py-6  bg-blue rounded-xl shadow shadow-slate-600 box-border"
                whileHover={{
                //   scale: 1.1,
                //   transition: { duration: 0.2 },
                }}
                // whileTap={{ scale: 0.9 }}
              >
                <h3 className="font-semibold text-xl text-center mb-4">{element.title}</h3>
                <p className="text-sm text-center">{element.description}</p>
              </motion.div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default About;
