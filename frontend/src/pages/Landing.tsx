// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Container, Header, Main, Aside, Footer } from "../layout/Landing";
// import { Nav } from "../components/Nav";
// import CompanyCard from "../components/CompanyCard";
// import { Company } from "../types/types";
// import Logo from "../components/Logo";
// import SignIn from "../components/SingIn";

// export default function Landing() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [companies, setCompanies] = useState<Company[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/v1/companies"
//         );
//         setCompanies(response.data.companies);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Container>
//       <Header>
//         <Logo />
//         <Nav />
//         <SignIn />
//       </Header>
//       <Main>
//         <CompanyCard companies={companies} />
//       </Main>
//       <Aside>Content for Aside</Aside>
//       <Footer>Footer Content</Footer>
//     </Container>
//   );
// }

import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import CompanyCard from "../components/CompanyCard";
import { Company } from "../types/types";

export default function Landing() {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/companies"
        );
        setCompanies(response.data.companies);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
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
          <div>Content for Aside</div>
          <footer className="mt-auto p-4 bg-gray-200">Footer Content</footer>
        </aside>
      </div>
    </div>
  );
}
