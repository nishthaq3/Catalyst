import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-pink-500">
            Catalyst
          </h2>

          <p className="text-gray-400 mt-4">
            Empowering innovators by making hackathons easier to organize,
            participate in, and evaluate.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-pink-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition">
                Hackathons
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Resources
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-pink-500 transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Connect With Us
          </h3>

          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-800 my-8" />

      <p className="text-center text-gray-500">
        © 2026 Catalyst. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;