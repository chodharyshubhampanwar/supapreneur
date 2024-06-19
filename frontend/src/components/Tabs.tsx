import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Company } from "../types/types";

interface Props {
  company: Company;
}

const Tabs: React.FC<Props> = ({ company }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = ["About", "Team", "Pitch", "Updates", "Discussion"];

  const getTabPath = (tab: string) => {
    return tab === "About"
      ? `/company/${company.slug}`
      : `/company/${company.slug}/${tab.toLowerCase()}`;
  };

  const isActiveTab = (tab: string) => {
    return currentPath === getTabPath(tab);
  };

  return (
    <div>
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <NavLink
            key={tab}
            to={getTabPath(tab)}
            className={
              isActiveTab(tab)
                ? "border-b-2 border-blue-500 text-blue-500 py-2 px-4"
                : "text-gray-500 py-2 px-4"
            }
          >
            {tab}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
