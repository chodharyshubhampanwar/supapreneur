import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const StyledLogo = styled.img`
  display: block;
  font-size: 0px;
  width: 100%;
  max-width: 32px; // Adjust max-width as needed for different breakpoints
  height: 32;
  border-radius: 50%;
  @media (max-width: 768px) {
    max-width: 32px; // Smaller logo on tablets
  }
  @media (max-width: 480px) {
    max-width: 32px; // Smaller logo on mobile phones
  }
`;

const Logo: React.FC = () => {
  return (
    <Link to="/hello">
      <StyledLogo src={logo} alt="main-logo" />
    </Link>
  );
};

export default Logo;
