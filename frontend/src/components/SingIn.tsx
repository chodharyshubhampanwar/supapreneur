import React from "react";
import styled from "styled-components";
import { signInWithGoogle } from "../services/authService"; // Import from authService instead of AuthContext

const SignInButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`;

const SignIn: React.FC = () => {
  return <SignInButton onClick={signInWithGoogle}>Sign In</SignInButton>;
};

export default SignIn;
