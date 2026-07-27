import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import FeaturedHackathons from "../../components/sections/FeaturedHackathons";
import UpcomingEvents from "../../components/sections/UpcomingEvents";
import WhyParticipate from "../../components/sections/WhyParticipate";
import Statistics from "../../components/sections/Statistics";

function Home() {
  return (
    <div className="min-h-screen bg-[#08080B]">
      <Navbar />
      <Hero />
      <FeaturedHackathons />
      <UpcomingEvents />
      <WhyParticipate />
      <Statistics />
    </div>
  );
}
export default Home;