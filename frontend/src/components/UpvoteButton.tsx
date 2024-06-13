import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import { UpvoteButtonProps } from "../types/types";
import { upvoteCompany } from "../api/api";
import { useAuth } from "../context/AuthContext";

const UpvoteButton: React.FC<UpvoteButtonProps> = ({ company }) => {
  const { user } = useAuth();

  const [upvotes, setUpvotes] = useState(company.upvotes);
  const [upvoted, setUpvoted] = useState(false);

  const handleUpvote = async () => {
    if (!user) {
      console.log("User must be logged in to upvote.");
      return;
    }

    try {
      const response = await upvoteCompany(company._id);
      setUpvotes(response.upvotes);
      setUpvoted(!upvoted);
    } catch (error) {
      console.error("Failed to upvote:", error);
    }
  };

  return (
    <UpvoteSection>
      <StyledUpvoteButton onClick={handleUpvote} upvoted={upvoted}>
        <FaArrowUp />
      </StyledUpvoteButton>
      <span>{upvotes}</span>
    </UpvoteSection>
  );
};

export default UpvoteButton;

const UpvoteSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1rem;
`;

const StyledUpvoteButton = styled.button<{ upvoted: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.upvoted ? "#2b6cb0" : "#a0aec0")};
  font-size: 1.25rem;
`;
