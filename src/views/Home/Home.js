import React from "react";
import styled from "styled-components";
import HomeImage from "./Home.jpg";
import LogoImage from "../../Assets/Logo.svg";
import SquareImage from "../../Assets/SquareImage.svg";
import ScrollIcon from "../../Assets/ScrollIcon.svg";
import { Link } from "react-scroll";
import { Parallax } from "react-parallax";

const Home = () => {
  return (
    <Parallax
      bgImage={HomeImage}
      bgImageAlt="Goodlooking man in the suit"
      strength={400}
    >
      <HomeSection id="Home">
        <BlackLayer />
        <WhiteLayer />
        <HomeSectionWrapper>
          <Logo src={LogoImage} alt="Logo Image" />
          <List>
            <Link activeClass="active" to="Home" smooth={true} duration={1000}>
              <ListItem>Home</ListItem>
            </Link>
            <Link
              activeClass="active"
              to="About Us"
              smooth={true}
              duration={1000}
            >
              <ListItem>About Us</ListItem>
            </Link>
            <Link
              activeClass="active"
              to="Collection"
              smooth={true}
              duration={1000}
            >
              <ListItem>Collection</ListItem>
            </Link>
            <Link
              activeClass="active"
              to="Contact"
              smooth={true}
              duration={1000}
            >
              <ListItem>Contact</ListItem>
            </Link>
          </List>
          <Quote>The first step to be respected is to look respectable</Quote>
          <SquareTopRight src={SquareImage} />
          <SquareBottomLeft src={SquareImage} />
          <Scroll src={ScrollIcon} />
        </HomeSectionWrapper>
      </HomeSection>
    </Parallax>
  );
};

const HomeSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const HomeSectionImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

const WhiteLayer = styled.div`
  width: 50%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  @media screen and (min-width: 1200px) {
    position: absolute;
    left: 0;
  }
`;

const BlackLayer = styled.div`
  width: 50%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 1200px) {
    position: absolute;
    right: 0;
  }
`;

const HomeSectionWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 90%;
  z-index: 100;
  transition: 1s ease;
  @media screen and (min-width: 830px) {
    width: 80%;
  }
`;

const Logo = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  @media screen and (min-width: 830px) {
    width: 4rem;
  }
`;

const SquareTopRight = styled.img`
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  @media screen and (min-width: 830px) {
    height: 4rem;
  }
`;

const SquareBottomLeft = styled.img`
  pointer-events: none;
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4rem;
    transform: rotate(180deg);
  }
`;

const Scroll = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  @media screen and (min-width: 830px) {
    height: 10rem;
  }
`;

const Quote = styled.q`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 11rem;
  font-size: 1.2rem;
  font-weight: 400;
  @media screen and (min-width: 830px) {
    font-size: 1.8rem;
    width: 20rem;
  }
  @media screen and (min-width: 1200px) {
    left: 85%;
    top: 60%;
    transform: translate(-85%, -50%);
    font-size: 3.6rem;
    width: 40rem;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  font-size: 1.2rem;
  height: 40%;
  @media screen and (min-width: 620px) {
    font-size: 1.8rem;
    width: 20rem;
  }
`;

const ListItem = styled.button`
  cursor: pointer;
  padding: 2rem;
  border: none;
  background: none;
  color: #eaeaea;
  font-size: 1.8rem;
  &::before {
    content: "";
    position: absolute;
    left: -0.5rem;
    width: 0.5rem;
    height: 2rem;
    background: rgba(255, 255, 255, 1);
    transition: 0.5s ease;
  }
  &:hover,
  :focus {
    outline: none;
    &::before {
      transition: 0.5s ease;
      width: 10%;
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

export default Home;
