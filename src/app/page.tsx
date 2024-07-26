import HeroSection from "@/components/HeroSection";
import FeatureCourses from "@/components/FeatureCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSection from "@/components/TestimonialSection";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import MeetOurInstructors from "@/components/MeetOurInstructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen antialiased ">
      <HeroSection />
      <FeatureCourses />
      <WhyChooseUs />
      <TestimonialSection />
      <UpcomingWebinar />
      <MeetOurInstructors />
      <Footer />
    </main>
  );
}
