import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCompany } from "../context/CompanyContext";

const Pitch: React.FC = () => {
  const company = useCompany();
  const { slug } = company;
  const [pitchData, setPitchData] = useState<any>(null);

  console.log(slug);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://supapreneur-gfte.onrender.com/api/v1/${slug}/pitch`
        );
        setPitchData(response.data.pitch);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [slug]);

  if (!pitchData) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Pitch Details</h1>
      <p>{pitchData.productDescription}</p>
    </div>
  );
};

export default Pitch;
