import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Homepage } from "@/components/Homepage"
import { View } from "@/components/View"
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Homepage/>
    <View/>
    </>
  );
}
