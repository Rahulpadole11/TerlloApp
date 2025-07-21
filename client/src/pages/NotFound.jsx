import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-4">Oops! Page not found.</p>
      <Link to="/" className="text-blue-600 underline">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
