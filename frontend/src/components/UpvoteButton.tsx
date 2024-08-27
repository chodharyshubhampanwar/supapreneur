// import React, { useState } from "react";
// import { PiArrowFatUpBold } from "react-icons/pi";
// import { UpvoteButtonProps } from "../types/types";
// import { upvoteCompany } from "../api/api";
// import { useAuth } from "../context/AuthContext";
// import Modal from "./Modal";

// const UpvoteButton: React.FC<UpvoteButtonProps> = ({ company }) => {
//   const { user } = useAuth();

//   const [upvotes, setUpvotes] = useState(company.upvotes);
//   const [upvoted, setUpvoted] = useState(false);
//   const [isModalOpen, setModalOpen] = useState(false);

//   const handleUpvote = async () => {
//     if (!user) {
//       setModalOpen(true);
//       return;
//     }

//     try {
//       const response = await upvoteCompany(company._id);
//       setUpvotes(response.upvotes);
//       setUpvoted(!upvoted);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleLogin = () => {
//     console.log("Redirect to login");
//     setModalOpen(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center ml-4 rounded border border-gray-300 w-12 h-12">
//       <div
//         className={`cursor-pointer ${
//           upvoted ? "text-gray-400" : "text-blue-700"
//         }`}
//         onClick={handleUpvote}
//       >
//         <PiArrowFatUpBold />
//       </div>
//       <span className="text-sm font-semibold leading-5 text-gray-700">
//         {upvotes}
//       </span>
//       <Modal
//         title="Login Required"
//         message="You need to log in to upvote."
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         onConfirm={handleLogin}
//       />
//     </div>
//   );
// };

// export default UpvoteButton;

// import React, { useState, useCallback } from "react";
// import { PiArrowFatUpBold } from "react-icons/pi";
// import { Company, VoteResponse } from "../types/types";
// import { voteCompany } from "../api/api";
// import { useAuth } from "../context/AuthContext";
// import Modal from "./Modal";

// interface VoteButtonProps {
//   company: Company;
// }

// const userId = "95a679db-e36e-4f54-bb95-f6a794e31516";

// const VoteButton: React.FC<VoteButtonProps> = ({ company }) => {
//   const { user } = useAuth();
//   const [voteCount, setVoteCount] = useState<number>(company.voteCount);
//   const [isVoted, setIsVoted] = useState<boolean>(company.isVoted);
//   const [isModalOpen, setModalOpen] = useState<boolean>(false);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const handleVote = useCallback(async () => {
//     if (!user) {
//       setModalOpen(true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response: VoteResponse = await voteCompany(company.id, userId);
//       setVoteCount(response.voteCount);
//       setIsVoted(response.action === "added");
//     } catch (error) {
//       console.error("Error voting:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [user, company.id]);

//   const handleCloseModal = useCallback(() => {
//     setModalOpen(false);
//   }, []);

//   const handleLogin = useCallback(() => {
//     console.log("Redirect to login");
//     setModalOpen(false);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center ml-4 rounded border border-gray-300 w-12 h-12">
//       <button
//         className={`cursor-pointer ${
//           isVoted ? "text-blue-700" : "text-gray-400"
//         } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
//         onClick={handleVote}
//         disabled={isLoading}
//         aria-label={isVoted ? "Remove vote" : "Vote"}
//       >
//         <PiArrowFatUpBold />
//       </button>
//       <span className="text-sm font-semibold leading-5 text-gray-700">
//         {voteCount}
//       </span>
//       <Modal
//         title="Login Required"
//         message="You need to log in to vote."
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         onConfirm={handleLogin}
//       />
//     </div>
//   );
// };

// export default React.memo(VoteButton);

import React, { useState, useCallback } from "react";
import { PiArrowFatUpBold } from "react-icons/pi";
import { Company, VoteResponse } from "../types/types";
import { voteCompany } from "../api/api";
import { useAuth } from "../context/AuthContext";
import Modal from "./Modal";

interface VoteButtonProps {
  company: Company;
}

const userId = "95a679db-e36e-4f54-bb95-f6a794e31516";

const VoteButton: React.FC<VoteButtonProps> = ({ company }) => {
  const { user } = useAuth();
  const [voteCount, setVoteCount] = useState<number>(company.voteCount);
  const [isVoted, setIsVoted] = useState<boolean>(company.isVoted);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleVote = useCallback(async () => {
    if (!user) {
      setModalOpen(true);
      return;
    }

    setIsLoading(true);
    try {
      const response: VoteResponse = await voteCompany(company.id, userId);
      setVoteCount(response.voteCount);
      setIsVoted(response.action === "added");
    } catch (error) {
      console.error("Error voting:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  }, [user, company.id]);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleLogin = useCallback(() => {
    // Implement your login logic here
    console.log("Redirect to login");
    setModalOpen(false);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center ml-4 rounded border border-gray-300 w-12 h-12">
      <button
        className={`cursor-pointer ${
          isVoted ? "text-blue-700" : "text-gray-400"
        } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={handleVote}
        disabled={isLoading}
        aria-label={isVoted ? "Remove vote" : "Vote"}
      >
        <PiArrowFatUpBold />
      </button>
      <span className="text-sm font-semibold leading-5 text-gray-700">
        {voteCount}
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
