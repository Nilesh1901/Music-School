"use client";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content = [
  {
    title: "Personalized Learning Paths",
    description:
      "Unlock your potential with our tailored learning paths. Whether you're a beginner or an advanced musician, our platform customizes lessons to fit your skill level and musical interests. Stay motivated and achieve your goals with lessons that adapt to your progress.",
    content: (
      <Image
        src="https://images.unsplash.com/photo-1453738773917-9c3eff1db985?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Personalized Learning Paths"
        width={600}
        height={600}
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from the best in the industry. Our platform features top musicians and educators who provide high-quality instruction and feedback. Gain insights and techniques from experienced professionals to elevate your music skills.",
    content: (
      <Image
        src="https://plus.unsplash.com/premium_photo-1661311834941-88cccc3b7a81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Expert Instructors"
        width={600}
        height={600}
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: "Interactive Practice Tools",
    description:
      "Enhance your practice sessions with our interactive tools. Use metronomes, tuners, and recording features to perfect your technique. Get instant feedback and track your progress to ensure you're on the right path to mastering your instrument.",
    content: (
      <Image
        src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Interactive Practice Tools"
        width={600}
        height={600}
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: "Community Support",
    description:
      "Join a vibrant community of musicians. Share your journey, get support, and collaborate with fellow learners. Our platform fosters a supportive environment where you can grow and connect with others who share your passion for music.",
    content: (
      <Image
        src="https://images.unsplash.com/photo-1525026198548-4baa812f1183?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="community support"
        width={600}
        height={600}
        className="h-full w-full object-cover"
      />
    ),
  }
];


function WhyChooseUs() {
  return (
    <div className="p-8">
    <StickyScroll content={content} />
  </div>
  )
}

export default WhyChooseUs