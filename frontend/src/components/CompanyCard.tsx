import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Company, UpvoteButtonProps } from "../types/types";
import { FaArrowUp } from "react-icons/fa";

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
`;

const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #4a5568;
  margin: 0.25rem 0;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  background-color: #ebf8ff;
  color: #2b6cb0;
  font-size: 0.875rem;
  font-weight: medium;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const UpvoteSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1rem;
`;

const UpvoteButton = styled.button<UpvoteButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.upvoted ? "#2b6cb0" : "#a0aec0")};
  font-size: 1.25rem;
`;

const CompanyCard = ({ company }: { company: Company }) => {
  const [upvotes, setUpvotes] = useState(company.upvotes || 0);
  const [upvoted, setUpvoted] = useState(false);

  const handleUpvote = () => {
    if (upvoted) {
      setUpvotes(upvotes - 1);
    } else {
      setUpvotes(upvotes + 1);
    }
    setUpvoted(!upvoted);
  };

  return (
    <Card>
      <Logo src={company.logo} alt={company.name} />
      <Content>
        <Title>{company.name}</Title>
        <Description>{company.description}</Description>
        <Tags>
          {company.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </Content>
      <UpvoteSection>
        <UpvoteButton onClick={handleUpvote} upvoted={upvoted}>
          <FaArrowUp />
        </UpvoteButton>
        <span>{upvotes}</span>
      </UpvoteSection>
    </Card>
  );
};

export default CompanyCard;
