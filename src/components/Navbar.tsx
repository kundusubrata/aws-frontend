import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = (): React.ReactElement => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md fixed w-full ">
      <Link to={"/"} className="text-2xl font-bold text-gray-800">Website</Link>

      <div className="hidden md:flex space-x-6">
        <Link to="/about" className="text-gray-600 hover:text-gray-900">
          About
        </Link>
        <Link to="/products" className="text-gray-600 hover:text-gray-900">
          Products
        </Link>
        <Link to="/contact" className="text-gray-600 hover:text-gray-900">
          Contact
        </Link>
      </div>

      <div className="space-x-4">
        <Button variant="outline" className="px-4">
          Sign Up
        </Button>
        <Button variant="default" className="px-4">
          Log In
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
