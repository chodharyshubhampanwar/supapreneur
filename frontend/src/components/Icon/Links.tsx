import React from "react";
import { LucideProps } from "lucide-react";

// Define props for the IconButton component
interface IconButtonProps {
  icon: (props: LucideProps) => JSX.Element;
  label: string;
}

const LinksButton: React.FC<IconButtonProps> = ({ icon: Icon, label }) => {
  return (
    <span
      className="flex items-center p-2 space-x-2 text-black rounded-md transition-colors duration-200 bg-white"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
      <span className="sr-only">{label}</span>
    </span>
  );
};

export default LinksButton;
