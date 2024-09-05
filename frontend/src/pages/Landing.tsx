import React, { useState, useEffect } from "react";
import CompanyCard from "../components/CompanyCard";
import { Company } from "../types/types";
import { getCompanies } from "../api/api";
import { ResponsiveLayout } from "../layout/Layout";
import Loading from "../components/Loading";
const Landing: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCompanies();
        setCompanies(response.companies);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleViewAll = () => {
    alert("You need to be a member to view all companies");
  };

  return (
    <>
      {isLoading && <Loading />}
      <ResponsiveLayout>
        <CompanyCard companies={companies} />
        <button
          className="bg-blue-500 text-white p-2 rounded-md my-4 w-full"
          onClick={handleViewAll}
        >
          View All
        </button>
      </ResponsiveLayout>
    </>
  );
};

export default Landing;
