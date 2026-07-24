import hackathons from "../../data/hackathons";
import HackathonCard from "../ui/HackathonCard";

const featuredHackathons = hackathons.filter(
	(hackathon) => hackathon.category === "featured"
  );
  
function FeaturedHackathons() {
  return (
    <section className="bg-[#08080B] text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Hackathons
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {featuredHackathons.map((hackathon) => (
            <HackathonCard
              key={hackathon.id}
              hackathon={hackathon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedHackathons;