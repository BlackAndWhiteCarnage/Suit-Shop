import React, { useState } from "react";
import styled from "styled-components";
import Dots from "../../components/Dots";
import HomeImage from "./Home.jpg";
import LogoImage from "../../Assets/Logo.svg";
import SquareImage from "../../Assets/SquareImage.svg";
import ScrollIcon from "../../Assets/ScrollIcon.svg";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const [slider, setSlider] = useState(false);

  const navHandler = () => {
    setNav(true);
  };

  const sliderHandler = () => {
    setSlider(true);
    setTimeout(() => {
      setSlider(false);
    }, 1000);
  };

  return (
    <HomeSection id="Home">
      <HomeSectionImage src={HomeImage} alt="Goodlooking man in the suit" />
      <BlackLayer />
      <WhiteLayer />
      <Slider className={slider ? "showSlider" : "hideSlider"}>
        <SliderLogo
          src={LogoImage}
          alt="Logo Image"
          className={slider ? "showSlider" : "hideSlider"}
        />
      </Slider>
      <HomeSectionWrapper className={nav ? "showNav" : "hideNav"}>
        <Logo
          className={nav ? "showNav" : "hideNav"}
          src={LogoImage}
          alt="Logo Image"
        />
        <List className={nav ? "showNav" : "hideNav"}>
          <Link
            activeClass="active"
            to="Home"
            smooth={true}
            offset={0}
            duration={500}
          >
            <ListItem
              onClick={() => {
                sliderHandler();
                setNav(false);
              }}
            >
              Home
            </ListItem>
          </Link>
          <Link
            activeClass="active"
            to="About Us"
            smooth={true}
            offset={0}
            duration={500}
          >
            <ListItem
              onClick={() => {
                navHandler();
                sliderHandler();
              }}
            >
              About Us
            </ListItem>
          </Link>
          <Link
            activeClass="active"
            to="Collection"
            smooth={true}
            offset={0}
            duration={500}
          >
            <ListItem
              onClick={() => {
                navHandler();
                sliderHandler();
              }}
            >
              Collection
            </ListItem>
          </Link>
          <Link
            activeClass="active"
            to="Contact"
            smooth={true}
            offset={0}
            duration={500}
          >
            <ListItem
              onClick={() => {
                navHandler();
                sliderHandler();
              }}
            >
              Contact
            </ListItem>
          </Link>
        </List>
        <Quote className={nav ? "showNav" : "hideNav"}>
          The first step to be respected is to look respectable
        </Quote>
        <SquareTopRight src={SquareImage} />
        <SquareBottomLeft src={SquareImage} />
        {/* <Dots className={nav ? "showNav" : "hideNav"} /> */}
        <Scroll src={ScrollIcon} className={nav ? "showNav" : "hideNav"} />
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

const Slider = styled.div`
  opacity: 0;
  transition: 0.1s ease;
  &.showSlider {
    opacity: 1;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: #1b2327;
    z-index: 200;
    transition: 0.1s ease;
  }
`;

const SliderLogo = styled.img`
  width: 0;
  transform: rotate(30deg);
  &.showSlider {
    width: 40rem;
    transform: rotate(0deg);
    transition: 0.5s ease;
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
  &.showNav {
    transition: 1s ease;
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    height: 5%;
    transform: none;
  }
  @media screen and (min-width: 830px) {
    width: 80%;
  }
`;

const Logo = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  &.showNav {
    display: none;
  }
  @media screen and (min-width: 830px) {
    width: 4rem;
  }
`;

const SquareTopRight = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  @media screen and (min-width: 830px) {
    height: 4rem;
  }
`;

const SquareBottomLeft = styled.img`
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
  &.showNav {
    display: none;
  }
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
  &.showNav {
    display: none;
  }
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
  &.showNav {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
  @media screen and (min-width: 620px) {
    font-size: 1.8rem;
    width: 20rem;
  }
`;

const ListItem = styled.li``;

export default Home;
