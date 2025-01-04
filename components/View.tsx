"use client";
import React, { useEffect } from "react";
import { driver } from "driver.js"; // Ensure this is the correct import
import "driver.js/dist/driver.css";;
import { SiJavascript,SiMongodb,SiSolidity } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { LiaJava } from "react-icons/lia";
import { motion } from "framer-motion";
import Image from "next/image";

console.log("Driver:", driver);   
export const View = () => {
  useEffect(() => {
    console.log("useEffect called");

    const driverInstance = driver({
      animate: true,
      popoverOptions: {opacity: 0.75},
      padding: 10,
      
    });

    console.log("driverInstance:", driverInstance);

    const startDriver = () => {
      console.log("startDriver called");
      driverInstance.highlight({
        element: "#tech-stack",
        popover: {
          title: "Tech Stack",
          description: "Here are the technologies I use.🧑🏻‍💻",
          position: "bottom",
        },
      });
     
    };
      
    // const handleClickOutside = (event: MouseEvent) => {
    //   console.log("handleClickOutside called");
    //   const techStackElement = document.getElementById("tech-stack");
    //   if (techStackElement && !techStackElement.contains(event.target as Node)) {
    //     console.log("Clicked outside tech-stack, resetting driver");
    //     driverInstance.reset();
    //   }
    // };

    const stackLink = document.getElementById("stack-link");
    if (stackLink) {
      console.log("stack-link found");
      stackLink.addEventListener("click", startDriver);
     // document.addEventListener("click", handleClickOutside);
    } else {
      console.log("stack-link not found");
    }

    return () => {
      if (stackLink) {
        stackLink.removeEventListener("click", startDriver);
       // document.removeEventListener("click", handleClickOutside);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          delay: 0.4,
          type: "spring",
          stiffness: 200,
        },
      }}
      className=" "
    >
      <div className="md:w-60 w-full rounded-2xl h-fit sticky top-5">
        <div>
          <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 h-fit">
            <a href="/Resume.pdf" target="_blank" className="flex justify-center">
              <button className="bg-[#d5c0c0] h-10 p-1 rounded-2xl text-xl w-full font-bold text-black" style={{ fontFamily: 'Bebas Neue, Arial, Helvetica, sans-serif' }}>
                Resume
              </button>
            </a>

            <div className="border border-neutral-700 my-5" />

            <div id="tech-stack" className="text-neutral-400" style={{ fontFamily: 'Bebas Neue, Arial, Helvetica, sans-serif' }}>
              <h1 className="font-bold text-neutral-200 text-xl">Tech Stack</h1>
              <div className="flex items-center gap-x-3  hover:bg-neutral-800 p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiJavascript className="text-xl " /> 
                </div>
                <div className="-mt-1">
                <h3 className="text-sm">
                  JavaScript 
                </h3>
                <p className="text-[11px] text-gray-500">(ReactJs, NodeJs, NextJs)</p>
              </div>
              </div>
              <div className="flex items-center gap-x-3  hover:bg-neutral-800 p-2 rounded-md">
                
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiSolidity className="text-xl " /> 
                </div>
                
                <h3 className="text-sm">
                  Solidity
                </h3>
              </div>
              <div className="flex items-center gap-x-3  hover:bg-neutral-800 p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                <FaJava className="text-2xl " />
                </div>
                <h3 className="text-sm">
                  Java
                </h3>
              </div>
              <div className="flex items-center gap-x-3  hover:bg-neutral-800 p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                <SiMongodb className="text-2xl " /> 
                </div>
                <h3 className="text-sm">
                  SQL
                </h3>
              </div>
              
            </div>
          </div>
        </div>

        <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 mt-3 text-neutral-50">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.34595964893!2d77.24107768462868!3d23.19963946710726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1735665660060!5m2!1sen!2sin" width="220" height="160" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <a href="https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh/@23.19941,77.405891,9z/data=!4m6!3m5!1s0x397c428f8fd68fbd:0x2155716d572d4f8!8m2!3d23.2599333!4d77.412615!16zL20vMGN3NTE?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
          <button className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-RubikMedium" >
            Location
          </button>
          </a>
          <p className="my-3 font-semibold font-RubikMedium text-xl"></p>
          
          
        </div>
      </div>
    </motion.div>
  );
};
