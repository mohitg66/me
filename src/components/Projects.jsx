import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { easeInOut, motion } from "framer-motion";
// import Modal from "./Modal";
import homepage from "../assets/homepage.png";
import shell from "../assets/shell.png";
import tankStars from "../assets/tankStars.jpg";


const description= "In this section, you can find some of the projects I've undertaken, showcasing my problem-solving skills and practical application of theoretical knowledge. Browse through my project portfolio and discover the diverse range of challenges I've tackled, from creating user-friendly interfaces to developing complex algorithms."

const projects=[
    {
        name: "Usability Hub",
        description: "A clone of the landing page of the website UsabilityHub.com, developed using HTML, CSS & JavaScript",
        image: homepage,
        link: "https://github.com/mohitg66/UsabilityHub",
        tech: ["https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
                "https://cdn-icons-png.flaticon.com/128/732/732190.png",
                "https://cdn.svgporn.com/logos/javascript.svg",
                "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
                "https://cdn-icons-png.flaticon.com/128/5968/5968866.png"
            ]
    },
    {
        name: "Basic Linux Shell",
        description: "A basic linux shell, designed and developed using standard C libraries and linux system calls such as fork() & system()",
        image: shell,
        link: "https://github.com/mohitg66/Basic-Linux-Shell",
        tech: ["https://cdn.svgporn.com/logos/c.svg",
               "https://cdn.svgporn.com/logos/linux-tux.svg",
               "https://cdn-icons-png.flaticon.com/128/5968/5968866.png",
               "https://cdn.svgporn.com/logos/git-icon.svg"
            ]
    },
    {
        name: "Tank Stars",
        description: "A clone of the popular game Tank Stars, developed using popular Java development framework libGDX by using OOPs",
        image: tankStars,
        link: "https://github.com/mohitg66/Tank-Stars",
        tech: ["https://cdn.svgporn.com/logos/java.svg",
                "https://camo.githubusercontent.com/3198fa48f74d152aa14a1bdd6ffa3d5bcc7d415189638443a7effaa08a80e36b/68747470733a2f2f6861707079636f64696e672e696f2f7475746f7269616c732f6c69626764782f696d616765732f6c69626764782d312e706e67",
            ]
    }
]

const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });

    return (
        <div id="Projects" className="relative min-h-screen bg-gradient-to-t from-dark-blue to-darker-blue px-14 py-14">
            <h4 className="font-roboto font-thin text-gray-400 text-sm mb-1 mx-1">WORK</h4>
            <h2 className="font-semibold text-6xl mb-6">Projects</h2>
            <p className="font-sans mb-10">{description}</p>

            <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-10 max-w-screen-md">
              {projects.map((project, index) => (
                <a href={project.link} target="_blank" key={project.name}>
                  <motion.div
                    className="bg-dark-blue rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-slate-700"
                    onClick={() => handleOpenModal(project)}
                    initial={{ opacity: 0, x: '100%' }}
                    animate={inView ? { opacity: 1, x: '0%', transition: {duration: 1, delay: index* 0.2} } : {}}
                    // transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2, delay: 0.2 } }}
                    whileTap={{ scale: 0.95, transition: { duration: 0.2 }  }}
                  >
                    <img src={project.image} alt={project.name} className="w-full object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                      <p className="text-gray-300 text-sm">{project.description}</p>
            
                      <div className="flex gap-2 mt-4">
                        {project.tech.map((tech, index) => (
                          <img key={index} className="h-4" src={tech} alt="tech" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>
        </div>
      );
}

export default Projects;
