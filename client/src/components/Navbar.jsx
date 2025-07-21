import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 shadow">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold hover:text-blue-400">
          🧩 Trello Clone
        </Link>
        <div>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
