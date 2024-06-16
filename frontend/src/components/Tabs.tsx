// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import Pitch from "./Pitch";
// import { Company } from "../types/types";

// interface Props {
//   children: React.ReactNode;
//   company: Company;
// }

// const Tabs: React.FC<Props> = ({ children, company }) => {
//   const location = useLocation();
//   const currentPath = location.pathname;

//   const isActiveTab = (tabName: string) => {
//     return currentPath.endsWith(tabName.toLowerCase());
//   };

//   return (
//     <div>
//       <div className="flex border-b mb-4">
//         {["About", "Team", "Pitch", "Updates", "Discussion"].map((tab) => (
//           <NavLink
//             key={tab}
//             // to={`/company/${company.slug}/${tab.toLowerCase()}`}
//             to={
//               tab === "About"
//                 ? `/company/${company.slug}/`
//                 : `/company/${company.slug}/${tab.toLowerCase()}`
//             }
//             className={({ isActive }) =>
//               `py-2 px-4 ${isActive ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`
//             }
//           >
//             {tab}
//           </NavLink>
//         ))}
//       </div>
//       <div>
//         {isActiveTab("Pitch") ? <Pitch companyId={company._id} /> : children}
//       </div>
//     </div>
//   );
// };

// export default Tabs;

import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Pitch from "./Pitch";
import { Company } from "../types/types";

interface Props {
  children: React.ReactNode;
  company: Company;
}

const Tabs: React.FC<Props> = ({ children, company }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActiveTab = (tabName: string) => {
    return currentPath.endsWith(tabName.toLowerCase());
  };

  return (
    <div>
      <div className="flex border-b mb-4">
        {["About", "Team", "Pitch", "Updates", "Discussion"].map((tab) => (
          <NavLink
            key={tab}
            to={
              tab === "About"
                ? `/company/${company.slug}`
                : `/company/${company.slug}/${tab.toLowerCase()}`
            }
            className={({ isActive }) =>
              `py-2 px-4 ${isActive && currentPath === (tab === "About" ? `/company/${company.slug}` : `/company/${company.slug}/${tab.toLowerCase()}`) ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`
            }
          >
            {tab}
          </NavLink>
        ))}
      </div>
      <div>
        {isActiveTab("Pitch") ? <Pitch companyId={company._id} /> : children}
      </div>
    </div>
  );
};

export default Tabs;
