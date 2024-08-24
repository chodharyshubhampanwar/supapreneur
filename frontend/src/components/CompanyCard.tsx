import React from "react";
import { Link } from "react-router-dom";
import { CompanyCardProps } from "../types/types";
import UpvoteButton from "../components/UpvoteButton";
// import { convertStringCase } from "../utils/string-conversion";

const CompanyCard: React.FC<CompanyCardProps> = ({ companies }) => {
  return (
    <>
      {companies.map((company) => (
        <div key={company._id} className="flex items-start py-2">
          <img
            src={company.logo}
            alt={company.company_name}
            className="w-12 h-12 rounded-md mr-4"
          />
          <div className="flex-1 flex flex-col">
            <div className="flex flex-col">
              <Link to={`/company/${company.slug}`}>
                <strong className="text-base font-semibold leading-6">
                  {company.company_name}
                </strong>
              </Link>

              <p className="text-base font-normal leading-6 text-gray-600">
                {company.tagline}
              </p>
            </div>
            {/* <div className="flex flex-wrap gap-2 items-center">
              {company.tags.map((tag, index) => (
                <React.Fragment key={tag}>
                  <span className="text-blue-600 text-xs font-medium">
                    {convertStringCase(tag, "capital")}
                  </span>
                  {index < company.tags.length - 1 && (
                    <span className="text-12 text-light-gray opacity-45">
                      •
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div> */}
          </div>
          <UpvoteButton company={company} />
        </div>
      ))}
    </>
  );
};

export default CompanyCard;
