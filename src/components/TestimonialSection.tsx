'use client'
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const testimonials = [
  {
    quote: "The beginner guitar lessons were exactly what I needed to start my musical journey. The instructor was knowledgeable and made learning fun!",
    name: "Emily R.",
    title: "Student"
  },
  {
    quote: "I've taken several online music courses, but the vocal training course here is the best by far. My singing has improved tremendously.",
    name: "Michael T.",
    title: "Aspiring Singer"
  },
  {
    quote: "The jazz saxophone improvisation course was a game-changer for me. I can now confidently improvise during live performances.",
    name: "Samantha L.",
    title: "Professional Musician"
  },
  {
    quote: "As a beginner, the music theory course was incredibly helpful. It gave me a solid foundation to understand and appreciate music better.",
    name: "David G.",
    title: "Music Enthusiast"
  },
  {
    quote: "The electronic music production course was comprehensive and easy to follow. I’m now producing my own tracks and loving it!",
    name: "Jessica M.",
    title: "Music Producer"
  },
  {
    quote: "I’ve always wanted to learn DJing, and this course exceeded my expectations. The lessons were clear, and the instructor was very supportive.",
    name: "Chris P.",
    title: "Beginner DJ"
  }
];



function TestimonialSection() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.06] items-center justify-center relative overflow-hidden">
      <h1 className="mb-12 text-4xl font-semibold text-center">Hear our Harmon: Voices of success</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  )
}

export default TestimonialSection