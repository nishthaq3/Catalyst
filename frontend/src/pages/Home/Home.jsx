import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import FeaturedHackathons from "../../components/sections/FeaturedHackathons";

function Home() {
  return (
    <div className="min-h-screen bg-[#08080B]">
      <Navbar />
      <Hero />
      <FeaturedHackathons />
    </div>
  );
}
export default Home;