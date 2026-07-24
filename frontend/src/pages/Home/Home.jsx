import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import FeaturedHackathons from "../../components/sections/FeaturedHackathons";
import UpcomingEvents from "../../components/sections/UpcomingEvents";

function Home() {
  return (
    <div className="min-h-screen bg-[#08080B]">
      <Navbar />
      <Hero />
      <FeaturedHackathons />
      <UpcomingEvents />
    </div>
  );
}
export default Home;