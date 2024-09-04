import React, { useState, useCallback, useEffect } from "react";
import { PiArrowFatUpBold } from "react-icons/pi";
import { Company, VoteResponse } from "../types/types";
import { voteCompany } from "../api/api";
import { useUser } from "../context/UserContext";
import Modal from "./Modal";

interface VoteButtonProps {
  company: Company;
  onVoteChange: (newVoteCount: number, isVoted: boolean) => void;
}

const VoteButton: React.FC<VoteButtonProps> = ({ company, onVoteChange }) => {
  const { user } = useUser();
  const [isVoted, setIsVoted] = useState<boolean>(company.isVoted || false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [voteCount, setVoteCount] = useState<number>(company.upvotes);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleVote = useCallback(async () => {
    if (!user) {
      setModalOpen(true);
      return;
    }

    setIsLoading(true);
    try {
      const response: VoteResponse = await voteCompany(company.id, user.id);
      const newVoteState = response.action === "added";
      const newVoteCount = response.voteCount;

      setIsVoted(newVoteState);
      setVoteCount(newVoteCount);
      setIsAnimating(true);

      onVoteChange(newVoteCount, newVoteState);
    } catch (error) {
      console.error("Error voting:", error);
    } finally {
      setIsLoading(false);
    }
  }, [user, company.id, onVoteChange]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleLogin = useCallback(() => {
    console.log("Redirect to login");
    setModalOpen(false);
  }, []);

  const displayVoteCount = voteCount > 0 ? voteCount : "-";

  return (
    <div className="flex flex-col items-center justify-center ml-4 rounded border border-gray-300 w-12 h-12 overflow-hidden">
      <button
        className={`cursor-pointer transform transition-all duration-200 ease-in-out active:scale-95 ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleVote}
        disabled={isLoading}
        aria-label={isVoted ? "Remove vote" : "Vote"}
      >
        <PiArrowFatUpBold
          className={`transition-all duration-300 ease-in-out hover:scale-110 ${
            isVoted ? "text-blue-700" : "text-gray-400"
          } ${isAnimating ? (isVoted ? "animate-fill-blue" : "animate-unfill-blue") : ""}`}
        />
      </button>
      <span
        key={voteCount}
        className={`text-sm font-semibold leading-5 transition-all duration-300 ease-in-out ${
          isAnimating ? "animate-bounce" : ""
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
