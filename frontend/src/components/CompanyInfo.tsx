import React from "react";
import {
  MapPin,
  Clock,
  TrendingUp,
  Link as LinkIcon,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Paperclip,
} from "lucide-react";
import { Company } from "../types/types";

interface CompanyInfoProps {
  company: Company;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ company }) => {
  const foundedYear = new Date(company.date_founded).getFullYear();

  return (
    <div className="flex flex-col space-y-2 text-gray-700">
      {/* Location */}
      <div className="flex items-center space-x-2">
        <MapPin className="w-4 h-4 text-gray-500" />
        <span>{company.location}</span>
      </div>

      {/* Founded Year */}
      <div className="flex items-center space-x-2">
        <Clock className="w-4 h-4 text-gray-500" />
        <span>Founded {foundedYear}</span>
      </div>

      {/* Raised From */}
      <div className="flex items-center space-x-2">
        <TrendingUp className="w-4 h-4 text-gray-500" />
        <span>
          Raised{" "}
          {`$${company.amount_raised.toLocaleString()}/${company.round_size.toLocaleString()}`}
        </span>
      </div>

      {/* Website and Social Links */}
      <div className="flex items-center space-x-2">
        <LinkIcon className="w-4 h-4 text-gray-500" />
        {/* <a href={company.links.website} className="text-blue-600">
          {company.links.website}
        </a> */}
        {company.links.linkedin && (
          <a
            href={company.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4 text-gray-600" />
          </a>
        )}
        {company.links.facebook && (
          <a
            href={company.links.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-4 h-4 text-blue-600" />
          </a>
        )}
        {company.links.twitter && (
          <a
            href={company.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-4 h-4 text-blue-600" />
          </a>
        )}
        {company.links.instagram && (
          <a
            href={company.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-4 h-4 text-blue-600" />
          </a>
        )}
        {company.pitch_deck && (
          <a
            href={company.pitch_deck}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Paperclip className="w-4 h-4 text-gray-600" />
          </a>
        )}
      </div>
    </div>
  );
};

export default CompanyInfo;
