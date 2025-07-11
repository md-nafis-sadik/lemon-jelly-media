import Testimonial from "@/components/testimonial/Testimonial";
import HeroHome from "@/components/hero/HeroHome";
import ServiceCardGrid from "@/components/home/ServiceCardGrid";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import { MarqueeDemo } from "@/components/home/OurGoals";
import Journals from "@/components/home/Journals";

const HomePage = () => {
  return (
    <main className="mt-[-125px] overflow-hidden max-w-[100vw]">
      <HeroHome />
      <ServiceCardGrid />
      <ProjectShowcase />
      <MarqueeDemo />
      <Testimonial />
      <Journals/>
    </main>
  );
};

export default HomePage;
