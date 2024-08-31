import React, { useState, useEffect } from "react";
import { Company } from "../types/types";
import { getCompany } from "../api/api";
import { Facebook, Instagram, Linkedin, Globe } from "lucide-react";
import { useParams } from "react-router-dom";

const CompanyDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCompany(slug || "");
        setCompany(response.company);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <img
            src={company?.logo || ""}
            alt={`${company?.title} logo`}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {company?.title}
            </h1>
            <p className="text-sm text-gray-600">{company?.tagline}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-600">Founded</h2>
            <p className="text-gray-800">
              {company?.date_founded
                ? new Date(company.date_founded).getFullYear()
                : ""}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-600">Stage</h2>
            <p className="text-gray-800">{company?.stage}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-600">Location</h2>
            <p className="text-gray-800">{company?.location}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-600">Region</h2>
            <p className="text-gray-800">{company?.region}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-600">Sector</h2>
            <p className="text-gray-800">{company?.sector}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-600 mb-2">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {company?.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-600 mb-2">
            Employees
          </h2>
          <ul className="list-disc list-inside">
            {/* {company?.employees.map((employee) => (
              <li key={employee.id} className="text-gray-800">
                {employee.name} - {employee.role}
              </li>
            ))} */}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-600 mb-2">Links</h2>
          <div className="flex gap-4">
            {company?.links.website && (
              <a
                href={company?.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <Globe size={24} />
              </a>
            )}
            {company?.links.facebook && (
              <a
                href={company?.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <Facebook size={24} />
              </a>
            )}
            {company?.links.instagram && (
              <a
                href={company?.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <Instagram size={24} />
              </a>
            )}
            {company?.links.linkedin && (
              <a
                href={company.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <Linkedin size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
