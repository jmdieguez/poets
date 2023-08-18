import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="bg-gradient-to-r from-pink-300 to-cyan-500 py-4">
        <div className="container mx-auto">
          <ul className="flex space-x-6 text-gray-800 hover:text-gray-700 transition duration-300 font-extrabold px-4 py-2 text-lg rounded-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-800 hover:text-gray-700 transition duration-300 font-extrabold px-4 py-2 text-lg rounded-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/poems"
                className="text-gray-800 hover:text-gray-700 transition duration-300 font-extrabold px-4 py-2 text-lg rounded-lg"
              >
                Poems
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className="text-gray-800 hover:text-gray-700 transition duration-300 font-extrabold px-4 py-2 text-lg rounded-lg"
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
