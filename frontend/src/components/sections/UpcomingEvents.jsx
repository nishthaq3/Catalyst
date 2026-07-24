import hackathons from "../../data/hackathons";
import HackathonCard from "../ui/HackathonCard";

const upcomingHackathons = hackathons.filter(
	(hackathon) => hackathon.category === "upcoming"
  );
  function UpcomingEvents() {
	return (
	  <section className="bg-[#08080B] text-white py-20 px-8">
		<div className="max-w-7xl mx-auto">
  
		  <h2 className="text-4xl font-bold text-center mb-12">
			Upcoming Hackathons
		  </h2>
  
		  <div className="grid grid-cols-3 gap-8">
			{upcomingHackathons.map((hackathon) => (
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
  
  export default UpcomingEvents;