import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import FeaturedHackathons from "../../components/sections/FeaturedHackathons";
import UpcomingEvents from "../../components/sections/UpcomingEvents";
import WhyParticipate from "../../components/sections/WhyParticipate";
import Statistics from "../../components/sections/Statistics";
import PreviousWinners from "../../components/sections/PreviousWinners";
import Testimonials from "../../components/sections/Testimonials";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#08080B]">
      <Navbar />
      <Hero />
      <FeaturedHackathons />
      <UpcomingEvents />
      <WhyParticipate />
      <Statistics />
      <PreviousWinners />
      <Testimonials />
      <Footer />
    </div>
  );
}
export default Home;