import React, { useState } from "react";
import axios from "axios";
import { AiOutlineLoading } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SocialLogin: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { user, signInWithGoogle, signOut } = useAuth();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const result = await signInWithGoogle();

      if (result.user) {
        const response = await axios.post(
          "https://n1xa36sfdh.execute-api.ap-south-1.amazonaws.com/dev/users",
          {
            email: result.user.email,
            firebaseId: result.user.uid,
          }
        );

        if (response.status === 200 || response.status === 201) {
          navigate("/profile");
        } else {
          setError(response.data.message || "An unexpected error occurred");
        }
      } else {
        setError("Failed to get user data after sign in");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      console.log("User logged out");
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {/* {user ? (
            <Link
              to={`/${user.email?.toLowerCase()}`}
              className="text-gray-700 hover:text-gray-900"
            >
              <HiOutlineUserCircle size={32} />
            </Link>
          ) : (

          )} */}
      {user ? (
        <button
          disabled={loading}
          onClick={handleLogout}
          className="flex items-center justify-center px-5 py-2 bg-blue-600 text-white font-semibold rounded shadow disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <AiOutlineLoading className="animate-spin" />
          ) : (
            <span className="text-lg">Log Out</span>
          )}
        </button>
      ) : (
        <button
          disabled={loading}
          onClick={handleLogin}
          className="flex items-center justify-center px-5 py-2 bg-blue-600 text-white font-semibold rounded shadow disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <AiOutlineLoading className="animate-spin" />
          ) : (
            <span className="text-lg">Get Started</span>
          )}
        </button>
      )}
    </>
  );
};

export default SocialLogin;
