import React from "react";

interface Props {
  logo: string;
  name: string;
  tagline: string;
}

const CompanyHeader: React.FC<Props> = ({ logo, name, tagline }) => {
  return (
    <div className="flex items-center mb-4">
      <img src={logo} alt={name} className="w-16 h-16 mr-4 rounded-full" />
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">{tagline}</p>
      </div>
    </div>
  );
};

export default CompanyHeader;
