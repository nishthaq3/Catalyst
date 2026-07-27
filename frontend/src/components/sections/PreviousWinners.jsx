import winners from "../../data/winners";
import WinnerCard from "../ui/WinnerCard";

function PreviousWinners() {
  return (
    <section className="bg-black py-20 px-8">

      <h2 className="text-4xl font-bold text-white text-center mb-14">
        Previous Winners
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {winners.map((winner) => (
          <WinnerCard
            key={winner.id}
            winner={winner}
          />
        ))}

      </div>

    </section>
  );
}

export default PreviousWinners;