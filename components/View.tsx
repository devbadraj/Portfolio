"use client";
import React, { useEffect } from "react";
import { driver } from "driver.js"; 
import "driver.js/dist/driver.css";
import { motion } from "framer-motion";
import Image from "next/image";

console.log("Driver:", driver);   
export const View = () => {
  useEffect(() => {
    console.log("useEffect called");

    const driverInstance =  driver({
      animate: true,
      opacity: 0.75,
      padding: 10,
      
    });

    console.log("driverInstance:", driverInstance);

    const startDriver = () => {
      console.log("startDriver called");
      driverInstance.highlight({
        element: "#tech-stack",
        popover: {
          title: "Tech Stack",
          description: "Here are the technologies I use.",
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
          duration: 0.5,
          delay: 0.9,
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
              <button className="bg-[#989797] h-10 p-1 rounded-2xl text-xl w-full font-bold text-black" style={{ fontFamily: 'Bebas Neue, Arial, Helvetica, sans-serif' }}>
                Resume
              </button>
            </a>

            <div className="border border-neutral-700 my-5" />

            <div id="tech-stack" className="text-neutral-400" style={{ fontFamily: 'Bebas Neue, Arial, Helvetica, sans-serif' }}>
              <h1 className="font-bold text-neutral-200">Tech Stack</h1>
              <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800 p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  {/* //<PiGithubLogoLight className="text-lg" /> */}
                </div>
                <h3 className="text-xs">
                  JavaScript <br /> (React,Next,Express)
                </h3>
              </div>
              <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800 p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  {/* <SiFramer className="text-lg" /> */}
                </div>
                <h3 className="text-xs">
                  Solidity
                </h3>
              </div>
              <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800 p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  {/* <SiCss3 className="text-lg" /> */}
                </div>
                <h3 className="text-xs">
                  CSS3
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 mt-3 text-neutral-50">
          <Image
            width={1000}
            height={1000}
            className="h-32 w-56 object-cover rounded-lg"
            src="/game.jpg"
            alt=""
          />
          <p className="my-3 font-RubikMedium text-sm"></p>
          <button className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-RubikMedium ">
            Location
          </button>
        </div>
      </div>
    </motion.div>
  );
};
