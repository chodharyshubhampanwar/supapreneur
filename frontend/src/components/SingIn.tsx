import React, { useState } from "react";
import styled from "styled-components";
import { signInWithGoogle } from "../services/authService";
import { useNavigate } from "react-router-dom";

const SignInButton = styled.button`
  padding: 10px 20px;
  background-color: #161cbb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`;

const SignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Failed to sign in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SignInButton onClick={handleSignIn} disabled={isLoading}>
        {isLoading ? "Signing In..." : "Sign In"}
      </SignInButton>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignIn;
