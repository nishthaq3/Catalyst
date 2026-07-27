function WinnerCard({ winner }) {
	return (
	  <div className="bg-gray-900 rounded-xl p-8 shadow-lg hover:scale-105 transition duration-300 text-center">
  
		<h1 className="text-6xl mb-4">
		  {winner.rank}
		</h1>
  
		<h3 className="text-2xl font-bold text-white">
		  {winner.team}
		</h3>
  
		<p className="text-gray-400 mt-2">
		  {winner.project}
		</p>
  
		<p className="text-pink-500 font-semibold mt-4">
		  {winner.prize}
		</p>
  
	  </div>
	);
  }
  
  export default WinnerCard;