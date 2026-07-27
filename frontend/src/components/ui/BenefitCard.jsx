function BenefitCard({ benefit }) {
	return (
		<div className="bg-zinc-900 rounded-xl p-6 shadow-lg">
		<h3 className="text-2xl font-semibold text-pink-500 mb-3">
			{benefit.title}</h3>
		<p className="text-gray-300">
			{benefit.description}</p>
	  </div>
	);
  }
  
  export default BenefitCard;