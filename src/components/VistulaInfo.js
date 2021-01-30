import React from "react";
import styled from "styled-components";

const VistulaInfo = () => (
  <VistulaImage>
    Image from{" "}
    <a target="_blank" href="https://vistula.pl/">
      https://vistula.pl/
    </a>
  </VistulaImage>
);

const VistulaImage = styled.h1`
  position: absolute;
  bottom: 0;
  z-index: 200;
  color: #e40000;
  font-family: "Teko", sans-serif;
  text-align: center;
  background: rgba(27, 39, 25, 0.8);
  font-size: ${(props) => props.theme.fontM};
  width: 100%;
  a {
    color: #e40000;
    text-decoration: none;
  }
  @media screen and (min-width: 830px) {
    font-size: ${(props) => props.theme.fontXL};
  }
`;

export default VistulaInfo;
