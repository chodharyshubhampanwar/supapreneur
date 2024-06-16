// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Company } from "../types/types";

// const CompanyHome = () => {
// const { slug } = useParams();
// const [company, setCompany] = useState<Company>();

// useEffect(() => {
//   const fetchCompany = async () => {
//     const response = await fetch(
//       `http://localhost:5000/api/v1/companies/${slug}`
//     );
//     const data = await response.json();
//     setCompany(data);
//   };
//   fetchCompany();
// }, [slug]);

// if (!company) {
//   return <div>Loading...</div>;
// }

//   return (
//     <>
//       <p>{company.tagline}</p>
//       <p>{company.location}</p>
//       <p>{company.website}</p>
//       <p>{company.slug}</p>
//       <p>{company.createdAt}</p>
//     </>
//   );
// };

// export default CompanyHome;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CompanyHeader from "../components/CompanyHeader";
import Tags from "../components/Tags";
import Tabs from "../components/Tabs";
import About from "../components/About";
import { Company } from "../types/types";
import Header from "../components/Header";

const CompanyProfile: React.FC = () => {
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
        <Tabs company={company}>
          <About
            location={company.location}
            founded={company.founded}
            links={company.links}
          />
        </Tabs>
      </div>
    </>
  );
};

export default CompanyProfile;
