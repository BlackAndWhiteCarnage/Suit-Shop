import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Product photos used in project are property of
        <Link target="_blank" href="https://vistula.pl/">
          Vistula.pl
        </Link>{" "}
        and they are used only for visual porpouse how website could look.
      </p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  height: 4rem;
  background: #08090a;
  color: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 1rem;
  }
  @media screen and (min-width: 830px) {
    font-size: ${(props) => props.theme.fontS};
  }
`;

const Link = styled.a`
  color: #e40000;
  text-decoration: none;
`;

export default Footer;
