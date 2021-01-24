import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Zdjęcia produktów zostały użyte w projekcie wyłącznie w celach
        poglądowych. Są własnością firmy{" "}
        <Link target="_blank" href="https://vistula.pl/">
          Vistula.pl
        </Link>
      </p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  height: 10rem;
  background: #141c1f;
  color: #e40000;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 1rem;
  }
  @media screen and (min-width: 830px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 830px) {
    font-size: 2.4rem;
  }
`;

const Link = styled.a`
  color: #eaeaea;
  text-decoration: none;
`;

export default Footer;
