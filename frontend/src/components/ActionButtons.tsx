import React from "react";
import { ArrowRight } from "lucide-react";

interface ActionButtonsProps {
  onMoreClick?: () => void;
  onBookmarkClick?: () => void;
  onUpvoteClick?: () => void;
  onVisitClick?: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  //   onMoreClick,
  //   onBookmarkClick,
  //   onUpvoteClick,
  onVisitClick,
}) => {
  return (
    <div className="flex items-center space-x-4 mt-4">
      {/* <div className="flex space-x-2">
        <button
          onClick={onMoreClick}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-200"
          aria-label="More options"
        >
          <MoreVertical className="text-gray-700" />
        </button>
        <button
          onClick={onBookmarkClick}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-200"
          aria-label="Bookmark"
        >
          <Bookmark className="text-gray-700" />
        </button>
        <button
          onClick={onUpvoteClick}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-200"
          aria-label="Upvote"
        >
          <ArrowUp className="text-gray-700" />
        </button>
      </div> */}

      <button
        onClick={onVisitClick}
        className="flex items-center space-x-2 px-3 py-1 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        aria-label="Visit"
      >
        <span>Visit</span>
        <ArrowRight className="text-white" size={12} />
      </button>
    </div>
  );
};

export default ActionButtons;
