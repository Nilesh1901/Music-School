"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import ViewCoursesButton from "./ViewCoursesButton";

const courses = [
  {
    title: "Beginner Guitar Lessons",
    description:
      "Start your musical journey with our beginner guitar lessons. Learn the basics and start playing your favorite songs in no time.",
    link: "/courses"
  },
  {
    title: "Vocal Training",
    description:
      "Improve your singing skills with our comprehensive vocal training course. Perfect for aspiring singers of all levels.",
    link: "/courses"
  },
  {
    title: "Jazz Saxophone Improvisation",
    description:
      "Learn to improvise like a pro with our jazz saxophone improvisation course. Suitable for intermediate and advanced players.",
    link: "/courses",
  },
  {
    title: "Music Theory",
    description:
      "Gain a solid understanding of music theory with our beginner-friendly course. Ideal for musicians of all backgrounds.",
    link: "/courses"
  },
  {
    title: "Electronic Music Production",
    description:
      "Produce your own tracks with our electronic music production course. Learn the latest techniques and software.",
    link: "/courses",
  },
  {
    title: "DJing Basics",
    description:
      "Get started with DJing with our basics course. Learn the skills you need to start performing live.",
    link: "/courses"
  },
];

function UpcomingWebinar() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center ">
          <h1 className="text-xl md:text-4xl font-extrabold leading-[2]">
            FEATURED WEBINARS
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 md:font-semibold">
            Enhance Your Musical Journey
          </p>
        </div>
        <div>
          <HoverEffect items={courses} />
        </div>
        <div className="text-center">
          <ViewCoursesButton />
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinar;
