function StatCard({ stat }) {
	return (
	  <div className="text-center">
		<h3 className="text-5xl font-bold text-pink-500">
		  {stat.number}
		</h3>
  
		<p className="text-gray-300 mt-2 text-lg">
		  {stat.label}
		</p>
	  </div>
	);
  }
  
  export default StatCard;