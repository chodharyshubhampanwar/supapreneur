import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "main aside"
    "footer footer";

  width: 100%;
  max-width: 1200px;
  height: 100vh;
  grid-gap: 20px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header"
      "main"
      "footer";
  }
`;

export const Header = styled.header`
  grid-area: header;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const Main = styled.main`
  grid-area: main;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  padding: 0 20px;
  @media (max-width: 768px) {
    border-right: none;
  }
`;

export const Aside = styled.aside`
  grid-area: aside;
  box-sizing: border-box;
  border-left: 1px solid #d9e1ec;
  margin-left: calc(32px * 2);
  padding-left: calc(72px - 1px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Footer = styled.footer`
  grid-area: footer;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
