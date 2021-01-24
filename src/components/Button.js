import React from "react";
import styled from "styled-components";

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

const StyledButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  &::before {
    content: "";
    position: absolute;
    left: -0.5rem;
    width: 0.5rem;
    height: 100%;
    background: rgba(255, 255, 255, 1);
    transition: 0.5s ease;
  }
  &:hover,
  :focus {
    outline: none;
    &::before {
      transition: 0.5s ease;
      width: 100%;
      background: rgba(255, 255, 255, 0.3);
    }
  }
  @media screen and (min-width: 830px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 830px) {
    font-size: 2.4rem;
  }
`;

export default Button;
