"use client"

import Link from "next/link"
import React,{ useState } from "react"
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { motion } from "framer-motion";

const navLinks = [
    { title: "About", path: "#about", id: "about-link"},
    { title: "Projects", path: "#work", id: "work-link"},
    { title: "Stack", path: "#stack", id: "stack-link"},
    { title: "Contact", path: "#contact", id: "contact-link"},
]

export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    return (
        <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        },
      }}
      className="fixed bottom-9 left-0 right-0 z-50"
    >
        <div className="flex justify-center text-white font-bold">

            <div className="border border-white/20 mb-8 backdrop-blur-3xl rounded-3xl
                            hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto">
                <ul className="flex flex-row p-1 space-x-10">
                    {navLinks.map((link,index) => (
                        <li key={index}>
                            <Link href={link.path} id={link.id} className="transform hover:text-white/50 transition-all duration-300 ease-in-out">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div onClick={toggleNav} className="md:hidden absolute top-5 right-14 border rounded z-50 text-white/70 border=white/70 p-2">
                {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
            </div>

            <div className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300
                        ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Mobile menu content */}
            </div>
        </div>
        </motion.div>
    )
}