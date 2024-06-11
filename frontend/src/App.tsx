import { useState, useEffect } from "react";
import axios from "axios";
import CompanyCard from "./components/CompanyCard";
import { Company } from "./types/types"; // Adjust the path as necessary

function App() {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/companies"
        );
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {companies.map((company) => (
        <CompanyCard key={company._id} company={company} />
      ))}
    </div>
  );
}

export default App;
