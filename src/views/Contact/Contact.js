import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "../../components/useScroll";
import ContactImage from "./Contact.jpg";
import SquareImage from "../../Assets/SquareImage.svg";
import LogoImage from "../../Assets/Logo.svg";
import Button from "../../components/Button";
import {
  containerAnim,
  fadeAnim,
  layerAnim,
  popAnim,
  listAnim,
  scrollAnim,
  shakeAnim,
} from "../../components/FramerMotion";

const Contact = () => {
  const [element, controls] = useScroll();

  return (
    <ContactSection
      id="Contact"
      variants={containerAnim}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <ContactSectionImage src={ContactImage} />
      <BlackLayer>
        <Logo src={LogoImage} alt="Logo Image" />
        <Form>
          <Header variants={fadeAnim}>Have any questions?</Header>
          <SquareTopRight src={SquareImage} variants={fadeAnim} />
          <SquareBottomLeft src={SquareImage} variants={fadeAnim} />
          <Label htmlFor="Subject">Subject</Label>
          <Input id="Subject" type="text" />
          <Label htmlFor="Email">Email</Label>
          <Input id="Email" type="text" />
          <Label htmlFor="Message">Message</Label>
          <TextArea id="Message" type="text" />
          <Button text={"Submit"} />
        </Form>
      </BlackLayer>
    </ContactSection>
  );
};

const ContactSection = styled(motion.section)`
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
  margin: 1rem 0 2rem 0;
  font-size: ${(props) => props.theme.fontS};
  @media screen and (min-width: 620px) {
    font-size: ${(props) => props.theme.fontM};
  }
`;

const Input = styled.input`
  width: 80%;
  height: 2rem;
  font-size: ${(props) => props.theme.fontM};
  color: white;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.5);
  }
  @media screen and (min-width: 830px) {
    height: 3rem;
  }
  @media screen and (min-width: 830px) {
    height: 4rem;
    font-size: ${(props) => props.theme.fontXL};
  }
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 10rem;
  font-size: ${(props) => props.theme.fontS};
  color: white;
  border: none;
  resize: none;
  background: rgba(255, 255, 255, 0.2);
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.5);
  }
  @media screen and (min-width: 830px) {
    font-size: ${(props) => props.theme.fontM};
  }
  @media screen and (min-width: 830px) {
    height: 15rem;
    font-size: ${(props) => props.theme.fontXL};
  }
`;

const Header = styled(motion.h2)`
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${(props) => props.theme.fontM};
  @media screen and (min-width: 620px) {
    font-size: ${(props) => props.theme.fontXL};
  }
`;

const SquareTopRight = styled(motion.img)`
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (min-width: 620px) {
    width: 4rem;
  }
`;

const SquareBottomLeft = styled(motion.img)`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: rotate(180deg);
  @media screen and (min-width: 620px) {
    width: 4rem;
  }
`;

export default Contact;
