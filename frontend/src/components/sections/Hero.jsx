import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="text-white min-h-screen flex items-center px-8">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center gap-12">

        {/* Left Content */}
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-6">
            Manage Hackathons. Collaborate. Innovate.
          </h1>

          <p className="text-gray-300 text-lg mb-8">
            Catalyst is a centralized platform where organizers can create
            hackathons, participants can register, judges can evaluate
            submissions, and administrators can manage the entire event.
          </p>

          <div className="flex gap-4">
            <Link to="/hackathons">
              <button className="bg-pink-600 px-6 py-3 rounded-lg">
                Explore Hackathons
              </button>
            </Link>

            <Link to="/login">
              <button className="border border-white px-6 py-3 rounded-lg">
                Sign In
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-1/2 flex justify-center">
          <div className="w-80 h-80 border-2 border-dashed border-gray-500 flex items-center justify-center rounded-xl">
            Hero Image
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;