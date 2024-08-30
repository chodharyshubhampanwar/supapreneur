import React, { useState, useCallback, useEffect } from "react";
import { PiArrowFatUpBold } from "react-icons/pi";
import { Company, VoteResponse } from "../types/types";
import { voteCompany } from "../api/api";
import { useAuth } from "../context/AuthContext";
import Modal from "./Modal";

interface VoteButtonProps {
  company: Company;
}

const VoteButton: React.FC<VoteButtonProps> = ({ company }) => {
  const { user } = useAuth();
  const [isVoted, setIsVoted] = useState<boolean>(company.isVoted || false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [animateCount, setAnimateCount] = useState<boolean>(false);

  const userId = "8850fba0-eb33-490d-b54a-fbfd7feb1cb6";

  console.log(company.id, userId);

  const handleVote = useCallback(async () => {
    if (!user) {
      setModalOpen(true);
      return;
    }

    setIsLoading(true);
    try {
      const response: VoteResponse = await voteCompany(company.id, userId);
      setIsVoted(response.action === "added");
      setAnimateCount(true);
    } catch (error) {
      console.error("Error voting:", error);
    } finally {
      setIsLoading(false);
    }
  }, [user, company.id]);

  useEffect(() => {
    if (animateCount) {
      const timer = setTimeout(() => setAnimateCount(false), 300);
      return () => clearTimeout(timer);
    }
  }, [animateCount]);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleLogin = useCallback(() => {
    console.log("Redirect to login");
    setModalOpen(false);
  }, []);

  const displayVoteCount = company.upvotes > 0 ? company.upvotes : "-";

  return (
    <div className="flex flex-col items-center justify-center ml-4 rounded border border-gray-300 w-12 h-12 overflow-hidden">
      <button
        className={`cursor-pointer transform transition-all duration-200 ease-in-out active:scale-95 ${
          isVoted ? "text-blue-700" : "text-gray-400"
        } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={handleVote}
        disabled={isLoading}
        aria-label={isVoted ? "Remove vote" : "Vote"}
      >
        <PiArrowFatUpBold className="transition-transform duration-200 ease-in-out hover:scale-110" />
      </button>
      <span
        key={company.upvotes}
        className={`text-sm font-semibold leading-5 transition-all duration-300 ease-in-out ${
          animateCount ? "text-blue-600 animate-bounce" : "text-gray-700"
        }`}
      >
        {displayVoteCount}
      </span>
      <Modal
        title="Login Required"
        message="You need to log in to vote."
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleLogin}
      />
    </div>
  );
};

export default React.memo(VoteButton);
