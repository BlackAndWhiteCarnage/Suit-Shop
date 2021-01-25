import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Zdjęcia produktów są własnością firmy{" "}
        <Link target="_blank" href="https://vistula.pl/">
          Vistula.pl
        </Link>{" "}
        zostały użyte w projekcie wyłącznie w celu poglądowym, jak mogłaby
        wyglądać strona.
      </p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  height: 5rem;
  background: #141c1f;
  color: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 1rem;
  }
  @media screen and (min-width: 830px) {
    font-size: ${(props) => props.theme.fontM};
  }
`;

const Link = styled.a`
  color: #e40000;
  text-decoration: none;
`;

export default Footer;
