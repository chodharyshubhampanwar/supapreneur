import React, { useEffect, useState } from "react";
import axios from "axios";

interface PitchProps {
  companyId?: string;
}

const Pitch: React.FC<PitchProps> = ({ companyId }) => {
  const [pitchData, setPitchData] = useState<any>(null);

  console.log(companyId);

  useEffect(() => {
    const fetchPitchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/pitch`, {
          params: { companyId: companyId },
        });
        setPitchData(response.data);
      } catch (error) {
        console.error("Failed to fetch pitch data:", error);
      }
    };

    fetchPitchData();
  }, [companyId]);

  if (!pitchData) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Pitch Details</h1>
      <p>{pitchData.productDescription}</p>
    </div>
  );
};

export default Pitch;
