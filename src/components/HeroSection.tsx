"use client"
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import MovingBorderBtn from "./MovingBorderBtn";

function HeroSection() {
  return (
    <div className="h-auto  bg-black/[0.96] antialiased bg-grid-white/[0.02] md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-24 md:mt-0 text-4xl font-bold md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you are a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-6">
          <Link href={"/courses"}>
            <MovingBorderBtn text="Explore Courses"/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
