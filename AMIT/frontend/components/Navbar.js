import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const path = useLocation().pathname;

  const linkClass = (p) =>
    `px-4 py-2 rounded-md ${
      path === p ? "bg-accent text-white" : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="w-full bg-card shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-white">
        FakeNewsDetector
      </Link>

      <div className="flex gap-4">
        <Link className={linkClass("/")} to="/">Home</Link>
        <Link className={linkClass("/history")} to="/history">History</Link>
      </div>
    </nav>
  );
};

export default Navbar;
