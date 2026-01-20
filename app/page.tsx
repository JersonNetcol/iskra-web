import Hero from "../componets/Hero";
import StrengthSection from "../componets/StrengthSection";
import StepsSection from "../componets/StepsSection";
import Footer from "../componets/Footer";
import ChatBot from "../componets/ChatBot";
import HowWeWorkSection from "../componets/HowWeWorkSection";



export default function Home() {
  return (
    <>
      <Hero />
      <StrengthSection />
      <StepsSection />
      <HowWeWorkSection />
      <Footer />
      <ChatBot/>
    </>
  );
}
