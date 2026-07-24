function HackathonCard({ hackathon }) {
	return (
	  <div className="bg-[#18181B] text-white rounded-xl p-6 shadow-lg">
		<h2 className="text-2xl font-semibold mb-3">
		  {hackathon.title}
		</h2>
  
		<p className="mb-2">
		  <span className="font-semibold">Organization:</span>{" "}
		  {hackathon.organization}
		</p>
  
		<p className="mb-2">
		  <span className="font-semibold">Mode:</span>{" "}
		  {hackathon.mode}
		</p>
  
		<p className="mb-2">
		  <span className="font-semibold">Prize:</span>{" "}
		  {hackathon.prize}
		</p>
  
		<p className="mb-4">
		  <span className="font-semibold">Date:</span>{" "}
		  {hackathon.date}
		</p>
  
		<button className="bg-pink-600 px-4 py-2 rounded-lg hover:bg-pink-700 transition">
		  View Details
		</button>
	  </div>
	);
  }
  
  export default HackathonCard;