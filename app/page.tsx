import FAQ from "@/components/faq/FAQ";
import Testimonial from "@/components/testimonial/Testimonial";
import HeroHome from "@/components/hero/HeroHome";
import ServiceCardGrid from "@/components/home/ServiceCardGrid";
import WhyChoose from "@/components/home/WhyChoose";
import CollaborateMarquee from "@/components/shared/CollaborateMarquee";
import { MarqueeDemo } from "@/components/home/OurGoals";

const HomePage = () => {
  return (
    <main className="mt-[-125px] overflow-hidden max-w-[100vw]">
      <HeroHome />
      <ServiceCardGrid />
      <WhyChoose />
      <MarqueeDemo />
      <Testimonial />
      {/* <FAQ />
      <CollaborateMarquee/>  */}
    </main>
  );
};

export default HomePage;
