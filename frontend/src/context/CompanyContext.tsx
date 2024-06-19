import React, { createContext, useContext } from "react";
import { Company } from "../types/types";

const CompanyContext = createContext<Company | undefined>(undefined);

export const useCompany = () => {
  const context = useContext(CompanyContext);
  if (context === undefined) {
    throw new Error("useCompany must be used within a CompanyProvider");
  }
  return context;
};

interface CompanyProviderProps {
  company: Company;
  children: React.ReactNode;
}

export const CompanyProvider: React.FC<CompanyProviderProps> = ({
  company,
  children,
}) => {
  return (
    <CompanyContext.Provider value={company}>
      {children}
    </CompanyContext.Provider>
  );
};
