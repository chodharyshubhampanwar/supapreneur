import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
// import SocialLogin from "../components/SingIn";

const Header: React.FC = () => {
  return (
    <header className="flex box-border w-full max-h-16 min-h-16 px-4 py-0 border-b border-gray-200">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center md:order-1">
          <Link to="/" className="text-xl font-bold md:hidden absolute left-20">
            <Logo />
          </Link>
          <Link to="/" className="text-xl font-bold hidden md:block">
            <Logo />
          </Link>
        </div>

        <div className="flex items-center md:order-3">
          <button
            className="flex items-center justify-center w-full bg-zinc-950 p-2 rounded"
            onClick={() => (window.location.href = "https://tally.so/r/wv4o2X")}
          >
            <span className="text-white text-center">Submit Pitch</span>
            <span className="text-xs text-blue-500 ml-2">→</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
