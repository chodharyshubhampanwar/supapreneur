import React from "react";
import { useAuth } from "../context/AuthContext";
import { HiOutlineBars3, HiOutlineUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Sign from "../components/SingIn";
import SocialLogin from "../components/SingIn";

const Header: React.FC = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <header className="flex box-border w-full max-h-16 min-h-16 px-4 py-0 border-b border-gray-200">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <button className="md:hidden mr-4 bg-white rounded-md p-2">
            <HiOutlineBars3 size={24} />
          </button>
          <Link to="/" className="text-xl font-bold">
            <Logo />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/link1" className="text-gray-700 hover:text-gray-900">
            Investors
          </Link>
          <Link to="/link2" className="text-gray-700 hover:text-gray-900">
            Founders
          </Link>
          <Link to="/link3" className="text-gray-700 hover:text-gray-900">
            Operators
          </Link>
        </nav>
        <div className="flex items-center">
          {user ? (
            <Link
              to={`/${user.email?.toLowerCase()}`}
              className="text-gray-700 hover:text-gray-900"
            >
              <HiOutlineUserCircle size={32} />
            </Link>
          ) : (
            <SocialLogin />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
