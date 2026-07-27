import { useState } from "react";

function Signup() {
  // State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Participant",
  });

  // Handles input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#0B0B12] flex items-center justify-center px-4">
      <div className="bg-gray-900 w-full max-w-md p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Create an Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-gray-300 mb-2">
              Select Role
            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500"
            >
              <option value="Participant">Participant</option>
              <option value="Organizer">Organizer</option>
              <option value="Judge">Judge</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Sign Up
          </button>

        </form>

      </div>
    </div>
  );
}

export default Signup;