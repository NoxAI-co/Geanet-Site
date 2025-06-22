import Hero from "@/components/blocks/Hero";
import Features from "@/components/blocks/Features";
import Case from "@/components/blocks/Case";
import FAQ2 from "@/components/blocks/FAQ2";
import Pricing1 from "@/components/blocks/Pricing1";

const HomeContainer = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <Case />
      <Pricing1 />
      <FAQ2 />
    </div>
  );
};

export default HomeContainer; 