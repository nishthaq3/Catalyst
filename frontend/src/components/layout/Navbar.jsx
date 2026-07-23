import { Link } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hackathons", path: "/hackathons" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-8 lg:px-10">
	  <Link
  to="/"
  className="text-3xl font-extrabold tracking-widest text-white"
>CATALYST</Link>
      {/* Navigation Links */}
	  <div className="flex gap-8">

	  {navLinks.map((link) => (
  <Link
    key={link.name}
    to={link.path}
    className="text-gray-300 font-medium tracking-wide transition-all duration-300 hover:text-white"
  >
    {link.name}
  </Link>
))}
</div>

      {/* Buttons */}
        
		</div>
    </nav>
  );
}

export default Navbar;