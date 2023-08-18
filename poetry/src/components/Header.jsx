import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="py-4">
        <div className="container mx-auto">
          <ul className="flex space-x-6 text-gray-800 hover:text-gray-700 transition duration-300 px-4 py-2 font-extrabold text-lg rounded-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/poems">Poems</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
