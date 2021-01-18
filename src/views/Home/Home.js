import React from "react";
import styled from "styled-components";
import Dots from "../../components/Dots";
import HomeImage from "./Home.jpg";
import LogoImage from "../../Assets/Logo.svg";
import SquareImageTopRight from "../../Assets/Square-top-right.svg";
import ScrollIcon from "../../Assets/ScrollIcon.svg";

const Home = () => {
  return (
    <HomeSection>
      <HomeSectionImage src={HomeImage} alt="Goodlooking man in the suit" />
      <BlackLayer />
      <WhiteLayer />
      <HomeSectionWrapper>
        <Logo src={LogoImage} alt="Logo Image" />
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Collection</ListItem>
          <ListItem>Contact</ListItem>
        </List>
        <Quote>The first step to be respected is to look respectable</Quote>
        <SquareTopRight src={SquareImageTopRight} />
        <Dots />
        <Scroll src={ScrollIcon} />
      </HomeSectionWrapper>
    </HomeSection>
  );
};

const HomeSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
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
`;

const BlackLayer = styled.div`
  width: 50%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const HomeSectionWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 80%;
`;

const Logo = styled.img`
  position: absolute;
  left: 0;
  top: 0;
`;

const SquareTopRight = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`;

const Scroll = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Quote = styled.q`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 11rem;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 400;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  font-size: 1.2rem;
  height: 40%;
`;

const ListItem = styled.li``;

export default Home;
