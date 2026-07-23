import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import Features from "../../components/sections/Features";
import Statistics from "../../components/sections/Statistics";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Statistics />
      <Footer />
    </>
  );
}

export default Home;