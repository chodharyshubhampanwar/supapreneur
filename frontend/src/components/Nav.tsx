import styled from "styled-components";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DesktopNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </DesktopNav>
      <NavIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </NavIcon>
      <MobileNav isOpen={isOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </MobileNav>
    </>
  );
};

const NavIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const DesktopNav = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  padding: 0 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: white;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;
