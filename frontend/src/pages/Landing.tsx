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

  return (
    <>
      {isLoading && <Loading />}
      <ResponsiveLayout>
        <CompanyCard companies={companies} />
      </ResponsiveLayout>
    </>
  );
};

export default Landing;
