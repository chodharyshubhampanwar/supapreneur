import { useState, useEffect } from "react";
import Header from "../components/Header";
import CompanyCard from "../components/CompanyCard";
import { Company } from "../types/types";
import { getCompanies } from "../api/api";

export default function Landing() {
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen mx-auto w-full max-w-[1200px]">
      <Header />
      <div className="box-border flex w-full overflow-hidden ">
        <main className="flex-1 p-4 overflow-y-auto border-r-2 border-r-indigo-90">
          <CompanyCard companies={companies} />
        </main>

        <aside className="hidden lg:flex flex-col p-4 bg-gray-100">
          <footer className="mt-auto p-4 bg-gray-200">Footer Content</footer>
        </aside>
      </div>
    </div>
  );
}
