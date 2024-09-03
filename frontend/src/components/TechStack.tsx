import React from "react";

interface TechStackProps {
  stack: string[];
}

const TechStack: React.FC<TechStackProps> = ({ stack }) => {
  return (
    <div className="mt-4">
      <h2 className="font-bold mb-2">Tech Stack</h2>
      <ul>
        {stack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;
