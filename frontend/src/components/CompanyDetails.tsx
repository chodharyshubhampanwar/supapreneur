import React from "react";
import { Company } from "../types/types";
import ProductStatusCard from "./CompanyInfo";
// import ProductImageGrid from "./ProductImage";
import ActionButtons from "./ActionButtons";
import { convertStringCase } from "../utils/string-conversion";
// import TechTags from "./TechStack";
import Pitch from "./Pitch";

interface CompanyInfoProps {
  company: Company;
  activeTab: "overview" | "team" | "review" | "updates";
  handleTabClick: (tab: "overview" | "team" | "review" | "updates") => void;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  company,
  activeTab,
  handleTabClick,
}) => {
  return (
    <div className="bg-white rounded-lg">
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full bg-gray-200 mr-4">
          <img
            src={company.logo}
            alt={company.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{company.title}</h2>
          <p className="text-gray-500">{company.tagline}</p>
          <div className="flex space-x-2 mt-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
              {convertStringCase(company.stage, "capital")}
            </span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
              {convertStringCase(company.industry, "capital")}
            </span>
          </div>
        </div>
      </div>

      <ActionButtons
        onVisitClick={() => window.open(company.links.website, "_blank")}
      />

      <div className="mt-6 sm:mt-6 md:mt-6">
        <div className="flex space-x-6 border-b border-gray-200">
          <button
            className={`pb-2 font-medium ${
              activeTab === "overview"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-800"
            }`}
            onClick={() => handleTabClick("overview")}
          >
            Overview
          </button>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-6 ">
          {activeTab === "overview" && (
            <>
              <div>
                <div className="mt-4 sm:mt-8 md:mt-4 w-full">
                  <ProductStatusCard company={company} />
                </div>
                {/* <ProductImageGrid images={company.product_images} /> */}

                <Pitch company={company} />
              </div>
            </>
          )}
          {activeTab === "team" && (
            <div>
              <h3 className="text-xl font-bold">Team</h3>
              {/* Add team member information here */}
            </div>
          )}
          {activeTab === "review" && (
            <div>
              <h3 className="text-xl font-bold">Review</h3>
              {/* Add review information here */}
            </div>
          )}
          {activeTab === "updates" && (
            <div>
              <h3 className="text-xl font-bold">Updates</h3>
              {/* Add update information here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
