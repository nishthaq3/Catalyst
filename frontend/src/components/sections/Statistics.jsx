import stats from "../../data/stats";
import StatCard from "../ui/StatCard";

function Statistics() {
  return (
    <section className="bg-[#0B0B12] text-white py-20 px-8">

      <h2 className="text-4xl font-bold text-center mb-14">
        Statistics
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">

        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            stat={stat}
          />
        ))}

      </div>

    </section>
  );
}

export default Statistics;