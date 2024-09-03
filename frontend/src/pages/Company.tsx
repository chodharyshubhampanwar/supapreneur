// import React, { useState, useEffect } from "react";
// import { Company } from "../types/types";
// import { getCompany } from "../api/api";
// import { useParams } from "react-router-dom";
// import CompanyInfo from "../components/CompanyDetails";

// const CompanyDetails: React.FC = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const [isLoading, setIsLoading] = useState(true);
//   const [company, setCompany] = useState<Company | null>(null);
//   const [activeTab, setActiveTab] = useState<
//     "overview" | "team" | "review" | "updates"
//   >("overview");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getCompany(slug || "");
//         setCompany(response.company);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, [slug]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   const handleTabClick = (tab: "overview" | "team" | "review" | "updates") => {
//     setActiveTab(tab);
//   };

//   if (!company) {
//     return <div>No company data available</div>;
//   }

//   return (
//     <CompanyInfo
//       company={company}
//       activeTab={activeTab}
//       handleTabClick={handleTabClick}
//     />
//   );
// };

// export default CompanyDetails;

import React, { useState, useEffect } from "react";
import { Company } from "../types/types";
import { getCompany } from "../api/api";
import { useParams } from "react-router-dom";
import CompanyDetails from "../components/CompanyDetails";
import { ResponsiveLayout } from "../layout/Layout";

import Loading from "../components/Loading";

const CompanyHome: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [company, setCompany] = useState<Company | null>(null);
  const [activeTab, setActiveTab] = useState<
    "overview" | "team" | "review" | "updates"
  >("overview");

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
    return <Loading />;
  }

  const handleTabClick = (tab: "overview" | "team" | "review" | "updates") => {
    setActiveTab(tab);
  };

  if (!company) {
    return <div>No company data available</div>;
  }

  return (
    <ResponsiveLayout>
      <CompanyDetails
        company={company}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />

      {/* <CompanyInsights insights={company.insights} /> */}
      {/* <CompanyLinks company={company} /> */}
    </ResponsiveLayout>
  );
};

export default CompanyHome;
