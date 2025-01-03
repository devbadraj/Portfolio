"use client";
import Link from "next/link";
import React,{useEffect} from "react";
import { PiCodeThin } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { driver } from "driver.js"; // Ensure this is the correct import
import "driver.js/dist/driver.css";

console.log("Driver:", driver); 
export const Homepage = () => {
    useEffect(() => {
      console.log("useEffect called");
  
      const driverInstance = driver({
        animate: true,
        opacity: 0.75,
        padding: 10,
        
      });
  
      console.log("driverInstance:", driverInstance);
  
      const startDriver = () => {
        console.log("startDriver called");
        driverInstance.highlight({
          element: "#work-section",
          popover: {
            title: "Projects",
            description: "Cool devs have cooler projects.🔗",
            position: "left",
          },
        });
        
      };
  
      const workLink = document.getElementById("work-link");
      if (workLink) {
        console.log("work-link found");
        workLink.addEventListener("click", startDriver);
      } else {
        console.log("work-link not found");
      }
  
      return () => {
        if (workLink) {
          workLink.removeEventListener("click", startDriver);
        }
      };
    }, []);
  
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
          delay: 0.8,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="w-full lg:w-fit "
    >
      <div className="  bg-[#1C1C1C] lg:bg-transparent rounded-2xl ">
        <div>
          <div className="flex gap-x-6 p-4">
            <PiCodeThin className="text-6xl text-neutral-50" />

            <div>
              <h1 className="text-2xl font-RubikMedium text-neutral-300">
                Work{" "}
                <span className="text-sm text-neutral-400"></span>
              </h1>
              <p className="max-w-sm text-neutral-400 text-sm">
              "Code is like humor. When you have to explain it, <br />{" "}
              it's bad".
              </p>
            </div>
          </div>

          <div className="border border-neutral-700 my-5" />

          <div id="work-section" className="  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <Link href={"/BrainRekt"}>
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="  flex items-center gap-x-3">
                  <Image
                    width={1000}
                    height={1000}
                    className="w-24 h-24 object-cover rounded-md"
                    src="/BrainRekt.jpg"
                    alt=""
                  />
                  <div>
                    <span className="text-sm font-bold">BrainRekt</span>
                    <h2 className="text-sm font-RubikMedium">
                      Coming Soon...
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={"https://nyaay-web.vercel.app/auth/login"} target="_blank">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <Image
                  height={1000}
                  width={1000}
                  className="w-24 h-24 object-cover rounded-md"
                  src="/Sheegra_Nyaay_Logo.webp"
                  alt=""
                />
                <div>
                  <span className="text-sm font-bold ">Sheegra Nyaay</span>
                  <h2 className="text-sm font-RubikMedium">
                  E-portal court system website for faster disposable of cases  based on priority system with NLP model.
                  </h2>
                </div>
              </div>
            </div>
            </Link>
            <Link href={"https://6419279426b0ac3dc54ff5b4--endearing-kulfi-b38859.netlify.app/"} target="_blank">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <Image
                  height={1000}
                  width={1000}
                  className="w-24 h-24 object-cover rounded-md"
                  src="/Charity_Connect.png"
                  alt=""
                />
                <div>
                  <span className="text-sm font-bold">Charity Connect</span>
                  <h2 className="text-sm font-RubikMedium">
                  A centralized platform that connects all NGOs and streamlines the donation process.
                  </h2>
                </div>
              </div>
            </div>
            </Link>
          </div>

          {/* without image */}

          <div className="my-4 p-5">
                        <h1 className="font-RubikRegular text-xl font-bold">Work History</h1>
                        <div className="mt-7 flex  justify-between">
                          <div className="flex gap-x-3">
                            
                            <div className="-mt-1">
                              <h3 className="text-sm font-RubikMedium">Founding Engineer</h3>
                              <p className="text-[11px] text-gray-500">Fest3</p>
                            </div>
                          </div>
                          <small className="text-[10px] text-neutral-300">
                            January 2023 - Current
                          </small>
                        </div>
                        <div className="my-3 flex  justify-between">
                          {/* <div className="flex gap-x-3">
                            
                            <div className="-mt-1">
                              <h3 className="text-sm font-RubikMedium">
                                Founder
                              </h3>
                              <p className="text-[11px] text-gray-500">Meow Meow</p>
                            </div>
                          </div>
                          <small className="text-[10px] text-neutral-300">
                            April 2004 - December 2024
                          </small> */}
                        </div>
                      </div>

          {/* With image */}

          {/* <div className=" mt-6  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <Image
                  height={1000}
                  width={1000}
                  className="w-24 h-24 object-cover rounded-md"
                  src="/pic.jpg"
                  alt=""
                />
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-RubikMedium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <Image
                  height={1000}
                  width={1000}
                  className="w-24 h-24 object-cover rounded-md"
                  src="/pic.jpg"
                  alt=""
                />
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-RubikMedium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <Image
                  height={1000}
                  width={1000}
                  className="w-24 h-24 object-cover rounded-md"
                  src="/pic.jpg"
                  alt=""
                />
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-RubikMedium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
          </div> */}
         
          {/* without image */}

          <div  className="mt-6  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <h2 className="text-sm font-RubikMedium">
                    Made with Struggle ❤️.
                  </h2>
                  <div className="flex items-center gap-x-2 font-RubikBold">
                    <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                      Dev Badraj
                    </p>
                    <div className="w-1 h-1 rounded-full bg-neutral-400 " />
                    <span className="text-xs font-">December, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
