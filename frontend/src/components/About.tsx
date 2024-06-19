import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaCalendarAlt,
  FaGooglePlay,
} from "react-icons/fa";
import { HiMiniMapPin, HiLink } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useCompany } from "../context/CompanyContext"; // Adjust the import path accordingly

const About: React.FC = () => {
  const company = useCompany();
  const { location, founded, links } = company;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <HiMiniMapPin style={{ color: "#4b587c" }} className="inline-block" />
        <strong>Location:</strong> {location}
      </div>
      {founded && (
        <div className="flex items-center gap-2">
          <FaCalendarAlt
            style={{ color: "#4b587c" }}
            className="inline-block"
          />
          <strong>Founded:</strong> {founded}
        </div>
      )}
      {links?.website && (
        <div className="flex items-center">
          <Link to={links.website} target="_blank" rel="noopener noreferrer">
            <HiLink style={{ color: "#4b587c" }} className="inline-block" />
            <span className="ml-1">{new URL(links.website).hostname}</span>
          </Link>

          <Link to={links.android} target="_blank" rel="noopener noreferrer">
            <FaGooglePlay
              style={{ color: "#4b587c" }}
              className="ml-2 inline-block"
            />
            <span className="ml-1">Play Store</span>
          </Link>
        </div>
      )}
      <div className="flex space-x-4">
        {links?.twitter && (
          <Link to={links.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter style={{ color: "#1DA1F2" }} />
          </Link>
        )}
        {links?.facebook && (
          <Link to={links?.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook style={{ color: "#3b5998" }} />
          </Link>
        )}
        {links?.instagram && (
          <Link to={links?.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ color: "#E1306C" }} />
          </Link>
        )}
        {links?.linkedin && (
          <Link to={links?.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ color: "#0077b5" }} />
          </Link>
        )}
      </div>
      <div>
        <iframe
          className="h-full w-full aspect-video overflow-hidden"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Vmz--sPqdz8"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
