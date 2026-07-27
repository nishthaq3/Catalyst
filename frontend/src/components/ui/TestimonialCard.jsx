function TestimonialCard({ testimonial }) {
	return (
	  <div className="bg-gray-900 rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300">
  
		<p className="text-gray-300 italic">
		  "{testimonial.review}"
		</p>
  
		<div className="mt-6">
		  <h3 className="text-white font-semibold">
			{testimonial.name}
		  </h3>
  
		  <p className="text-pink-500 text-sm">
			{testimonial.role}
		  </p>
		</div>
  
	  </div>
	);
  }
  
  export default TestimonialCard;