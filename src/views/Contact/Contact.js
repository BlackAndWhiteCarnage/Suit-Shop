import React from "react";
import styled from "styled-components";
import ContactImage from "./Contact.jpg";
import SquareImage from "../../Assets/SquareImage.svg";
import LogoImage from "../../Assets/Logo.svg";

const Contact = () => {
  return (
    <ContactSection id="Contact">
      <ContactSectionImage src={ContactImage} />
      <BlackLayer>
        <Logo src={LogoImage} alt="Logo Image" />
        <Form>
          <Header>Have any questions?</Header>
          <SquareTopRight src={SquareImage} />
          <SquareBottomLeft src={SquareImage} />
          <Label htmlFor="Subject">Subject</Label>
          <Input id="Subject" type="text" />
          <Label htmlFor="Email">Email</Label>
          <Input id="Email" type="text" />
          <Label htmlFor="Message">Message</Label>
          <TextArea id="Message" type="text" />
          <Button>Submit</Button>
        </Form>
      </BlackLayer>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  width: 100%;
  height: 80vh;
`;

const ContactSectionImage = styled.img`
  position: absolute;
  width: 100%;
  height: 80vh;
  object-fit: cover;
  z-index: -1;
`;

const BlackLayer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  background: rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 1200px) {
    justify-content: space-around;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10rem;
  opacity: 0.04;
  z-index: 5;
  @media screen and (min-width: 830px) {
    width: 20rem;
  }
  @media screen and (min-width: 1200px) {
    position: static;
    width: 50rem;
    transform: translate(0, 0);
  }
`;

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 80%;
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;

const Label = styled.label`
  width: 80%;
  font-size: 1.2rem;
  margin: 1rem 0 2rem 0;
  @media screen and (min-width: 830px) {
    font-size: 1.8rem;
  }
`;

const Input = styled.input`
  width: 80%;
  height: 2rem;
  font-size: 1.2rem;
  color: white;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.5);
  }
  @media screen and (min-width: 830px) {
    font-size: 1.8rem;
    height: 3rem;
  }
  @media screen and (min-width: 830px) {
    height: 4rem;
    font-size: 2.4rem;
  }
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 10rem;
  font-size: 1.2rem;
  color: white;
  border: none;
  resize: none;
  background: rgba(255, 255, 255, 0.2);
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.5);
  }
  @media screen and (min-width: 830px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 830px) {
    height: 15rem;
    font-size: 2.4rem;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  border: none;
  background: none;
  color: white;
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

const Header = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  @media screen and (min-width: 830px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 830px) {
    font-size: 2.4rem;
  }
`;

const SquareTopRight = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (min-width: 830px) {
    width: 4rem;
  }
`;

const SquareBottomLeft = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: rotate(180deg);
  @media screen and (min-width: 830px) {
    width: 4rem;
  }
`;

export default Contact;
