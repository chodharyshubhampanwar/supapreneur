import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Header, Main, Aside, Footer } from "../layout/Landing";
import { Nav } from "../components/Nav";
import CompanyCard from "../components/CompanyCard";
import { Company } from "../types/types";
import Logo from "../components/Logo";
import SignIn from "../components/SingIn";

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
    <Container>
      <Header>
        <Logo />
        <Nav />
        <SignIn />
      </Header>
      <Main>
        <CompanyCard companies={companies} />
      </Main>
      <Aside>Content for Aside</Aside>
      <Footer>Footer Content</Footer>
    </Container>
  );
}
