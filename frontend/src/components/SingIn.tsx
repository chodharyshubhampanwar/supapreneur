import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";
import { useAuth } from "../context/AuthContext";
import { createUser } from "../api/api";

const SocialLogin: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { user, signInWithGoogle, signOut } = useAuth();

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithGoogle();
      if (!result.user) {
        throw new Error("Failed to get user data after sign in");
      }

      const response = await createUser(
        result.user.email || "",
        result.user.uid
      );
      if (response.user) {
        // navigate(`/${response.user.username.toLowerCase()}`);
        navigate("/profile");
      } else {
        throw new Error(response.message || "An unexpected error occurred");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      setError("An error occurred during logout. Please try again later.");
    }
  };

  return (
    <>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button
        disabled={loading}
        onClick={user ? handleLogout : handleLogin}
        className="flex items-center justify-center px-5 py-2 bg-blue-600 text-white font-semibold rounded shadow disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <AiOutlineLoading className="animate-spin" />
        ) : (
          <span className="text-lg">{user ? "Log Out" : "Get Started"}</span>
        )}
      </button>
    </>
  );
};

export default SocialLogin;
