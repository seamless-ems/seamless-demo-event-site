import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Speakers from "@/components/landing/Speakers";
import Schedule from "@/components/landing/Schedule";
import Partners from "@/components/landing/Partners";
import Register from "@/components/landing/Register";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Partners />
      <Register />
      <Footer />
    </div>
  );
};

export default Index;
