import benefits from "../../data/benefits";
import BenefitCard from "../ui/BenefitCard";

function WhyParticipate() {
  return (
    <section className="bg-[#08080B] text-white py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
		Why Participate?</h2>

		<div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
      {benefits.map((benefit) => (
        <BenefitCard
          key={benefit.id}
          benefit={benefit}
        />
      ))}
	  </div>
    </section>
  );
}

export default WhyParticipate;