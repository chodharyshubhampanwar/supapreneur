import React, { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import CompanyHeader from "../components/CompanyHeader";
import Tags from "../components/Tags";
import Tabs from "../components/Tabs";
import { Company } from "../types/types";
import Header from "../components/Header";
import { CompanyProvider } from "../context/CompanyContext";

const CompanyHome: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [company, setCompany] = useState<Company>();

  useEffect(() => {
    const fetchCompany = async () => {
      const response = await fetch(
        `http://localhost:5000/api/v1/companies/${slug}`
      );
      const data = await response.json();
      setCompany(data);
    };
    fetchCompany();
  }, [slug]);

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-4 bg-white min-h-screen">
        <CompanyHeader
          logo={company.logo}
          name={company.name}
          tagline={company.tagline}
        />
        <Tags tags={company.tags} />
        <Tabs company={company} />
        <CompanyProvider company={company}>
          <Outlet />
        </CompanyProvider>
      </div>
    </>
  );
};

export default CompanyHome;
