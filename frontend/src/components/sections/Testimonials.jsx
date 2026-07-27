import testimonials from "../../data/testimonials";
import TestimonialCard from "../ui/TestimonialCard";

function Testimonials() {
  return (
    <section className="bg-[#0B0B12] py-20 px-8">

      <h2 className="text-4xl font-bold text-center text-white mb-14">
        What Our Users Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
          />
        ))}

      </div>

    </section>
  );
}

export default Testimonials;