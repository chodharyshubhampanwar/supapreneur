import React from "react";
import styled from "styled-components";

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
    <StyledLogo
      src={
        "https://res.cloudinary.com/duuxmszlf/image/upload/v1725433338/Scalership_g1kbxv.png"
      }
      alt="main-logo"
    />
  );
};

export default Logo;
