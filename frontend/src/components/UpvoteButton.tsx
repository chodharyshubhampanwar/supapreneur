import React, { useState } from "react";
import { PiArrowFatUpBold } from "react-icons/pi";
import { UpvoteButtonProps } from "../types/types";
import { upvoteCompany } from "../api/api";
import { useAuth } from "../context/AuthContext";
import Modal from "./Modal";

const UpvoteButton: React.FC<UpvoteButtonProps> = ({ company }) => {
  const { user } = useAuth();

  const [upvotes, setUpvotes] = useState(company.upvotes);
  const [upvoted, setUpvoted] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleUpvote = async () => {
    if (!user) {
      setModalOpen(true);
      return;
    }

    try {
      const response = await upvoteCompany(company._id);
      setUpvotes(response.upvotes);
      setUpvoted(!upvoted);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleLogin = () => {
    console.log("Redirect to login");
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center ml-4 rounded border border-gray-300 w-12 h-12">
      <div
        className={`cursor-pointer ${
          upvoted ? "text-gray-400" : "text-blue-700"
        }`}
        onClick={handleUpvote}
      >
        <PiArrowFatUpBold />
      </div>
      <span className="text-sm font-semibold leading-5 text-gray-700">
        {upvotes}
      </span>
      <Modal
        title="Login Required"
        message="You need to log in to upvote."
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleLogin}
      />
    </div>
  );
};

export default UpvoteButton;
