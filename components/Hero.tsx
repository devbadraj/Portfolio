"use client";
import React, { useState, useEffect } from "react";
import { driver } from "driver.js"; 
import {
  PiMagicWandThin,
  PiShapesThin,
} from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { SiAdobe } from "react-icons/si";
import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const controls = useAnimation();

  useEffect(() => {
    const driverInstance = driver({
      animate: true,
      opacity: 0.75,
      padding: 10,
    });

    const startDriver = (elementId, title, description) => {
      driverInstance.highlight({
        element: elementId,
        popover: {
          title: title,
          description: description,
          position: "right",
        },
      });
    };

    const contactLink = document.getElementById("contact-link");
    if (contactLink) {
      contactLink.addEventListener("click", () => startDriver("#contacts-section", "Let's Connect", "Always excited to meet new folks.😸"));
    }

    const aboutLink = document.getElementById("about-link");
    if (aboutLink) {
      aboutLink.addEventListener("click", () => startDriver("#about-section", "Know Me Better", "Your Friendly Neighborhood Developer.😈"));
    }

    return () => {
      if (contactLink) {
        contactLink.removeEventListener("click", () => startDriver("#contacts-section", "Contacts Section", "This is the contacts section."));
      }
      if (aboutLink) {
        aboutLink.removeEventListener("click", () => startDriver("#about-section", "About Section", "This is the about section."));
      }
    };
  }, []);

  return (
    <div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, type: "spring", stiffness: 200 },
        }}
        className="  bg-[#1C1C1C] w-full md:w-80  h-fit sticky top-5 rounded-2xl"
      >
        <div id="about-section">
          <div className=" md:w-80 w-full p-3 border border-neutral-800   rounded-2xl h-full bg-[#1C1C1C]">
            <div className="flex">
              <div className="w-full relative">
                <Image
                  width={1000}
                  height={1000}
                  className="w-28 h-28 rounded-full object-cover "
                  src="/baddy.png"
                  alt="Dev"
                />
                <div
                  onClick={() => setOpen(!open)}
                  className="bg-lime-400 w-3 h-3 cursor-pointer rounded-full absolute top-20 right-28 animate-pulse left-24"
                />

                {open && (
                  <div className="border border-lime-400 h-5 flex items-center justify-center rounded-2xl w-20 px-2 absolute top-[4.7rem]  left-32">
                    <p className="text-[9px] font-RubikMedium text-lime-300 left-">
                      Open for Work
                    </p>
                  </div>
                )}
                <h1 className="font-RubikExtraBold text-xl  text-neutral-300 mt-3">
                  Dev Badraj
                </h1>
                <p className="text-xs font-RubikMedium text-neutral-300 mt-2">
                    <a href="mailto:dbadraj@gmail.com" className="hover:underline"  target="_blank">
                  dbadraj@gmail.com 📧
                  </a>
                </p>

                <p className="text-xs font-RubikMedium text-neutral-300 mt-1">
                    <a href="https://devbadraj.com" className="hover:underline" target="_blank">
                  devbadraj.com 🌍
                  </a>
                </p>

                <div className="flex w-full   ">
                  <div className="flex gap-x-1  text-xs my-4">
                    <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold shrink-0">
                      Full-Stack
                    </p>
                    <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold shrink-0">
                      Blockchain
                    </p>
                    <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold shrink-0">
                      Mobile
                    </p>
                    
                  </div>
                </div>
              </div>

              <div className="flex gap-x-1 w-full h-fit">
                {/* <Link href={"/"}>
                  <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                    <PiHouseLight className="text-neutral-100" />
                  </div>
                </Link>

                <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                  <PiBookOpenTextLight className="text-neutral-100" />
                </div> */}
              </div>
            </div>

            {/* <form
              onSubmit={handleSubmit}
              className="bg-[#282828] p-1  rounded-md md:flex items-center  justify-between h-9 w-full hidden "
            >
              <input
                value={email}
                onChange={handleChange}
                className=" w-36 focus:outline-none bg-transparent text-neutral-400 text-xs placeholder:text-neutral-600 h-full pl-2 placeholder:text-xs placeholder:font-RubikMedium"
                placeholder="name@email.com"
                type="text"
              />
              <motion.button
                animate={controls}
                className="bg-[#696969] h-full p-1 rounded-md text-xs w-20 font-RubikMedium text-neutral-50"
              >
                Subscribe
              </motion.button>
            </form> */}

            <div className="w-full mt-5 text-neutral-300">
              <h2 className="my-4 font-sans font-bold size-3 text-xl">Bio</h2>
              <p className="text-[12px]  font-RubikRegular my-3">
                  Hey there, I’m Dev! ^●^ <br/>  I’m a 20
                  year old full-stack and 
                  blockchain developer based in India.{" "}
              </p>
            </div>

            <div className="mt-6 flex justify-between text-sm">
              <div className="flex items-center gap-x-1">
                <PiShapesThin />
                <span className="text-xs font-RubikRegular">
                  2 Years as a Developer
                </span>
              </div>
              <div className="flex items-center gap-x-1">
                <PiMagicWandThin />
                <span className="text-xs font-RubikRegular">Freelancer</span>
              </div>
            </div>

            <div className="border border-[#282828] text-neutral-300 my-6" />

            <div id="contacts-section" className="my-4 ">
              <h1 className="font-sans font-bold text-xl">Contacts</h1>
              <div className="mt-3 flex  justify-between">
                
                <div className="flex gap-x-2">
                  <FaXTwitter className="text-xl " />
                  <div className="-mt-1">
                  <a href="https://x.com/DevBadraj" className="font-sans p-1" target="_blank "> - @DevBadraj</a>
                    
                  </div>
                </div>
                
              </div>
              <div className="my-3 flex  justify-between">
                <div className="flex gap-x-3">
                  <FaTelegramPlane  className="text-xl" />
                  <div className="-mt-1">
                  <a href="https://t.me/dbadraj" className="font-sans" target="_blank">- @dbadraj</a>
                  </div>
                </div>
                
              </div>
              <div className="my-3 flex  justify-between">
                <div className="flex gap-x-3">
                  <FaLinkedin  className="text-xl" />
                  <div className="-mt-1">
                  <a href="https://www.linkedin.com/in/devbadraj/" className="font-sans" target="_blank">- @devbadraj</a>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
