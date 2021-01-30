import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HomeImage from "./Home.jpg";
import LogoImage from "../../Assets/Logo.svg";
import SquareImage from "../../Assets/SquareImage.svg";
import RedArrowIcon from "../../Assets/RedArrowIcon.svg";
import CartIcon from "../../Assets/CartIcon.svg";
import ArrowUp from "../../Assets/ArrowUp.svg";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import {
  containerAnim,
  fadeAnim,
  layerAnim,
  popAnim,
  listAnim,
  scrollAnim,
  shakeAnim,
} from "../../components/FramerMotion";

const Home = ({ cart }) => {
  const scrollTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ParallaxImg
      bgImage={HomeImage}
      bgImageAlt="Goodlooking man in the suit"
      strength={400}
    >
      <HomeSection
        id="Home"
        variants={containerAnim}
        initial="hidden"
        animate="show"
      >
        <LinkRoute to="/Cart">
          <Cart src={CartIcon} />
          <CartCount>{cart.length}</CartCount>
        </LinkRoute>
        <ArrowWrapper onClick={scrollTopHandler}>
          <HomeArrow src={ArrowUp} />
        </ArrowWrapper>
        <BlackLayer variants={layerAnim} />
        <WhiteLayer variants={layerAnim} />
        <HomeSectionWrapper>
          <Logo src={LogoImage} alt="Logo Image" variants={fadeAnim} />
          <List variants={listAnim}>
            <Link activeClass="active" to="Home" smooth={true} duration={1000}>
              <ListItem variants={popAnim}>Home</ListItem>
            </Link>
            <Link
              activeClass="active"
              to="About Us"
              smooth={true}
              duration={1000}
            >
              <ListItem variants={popAnim}>About Us</ListItem>
            </Link>
            <Link
              activeClass="active"
              to="Collection"
              smooth={true}
              duration={1000}
            >
              <ListItem variants={popAnim}>Collection</ListItem>
            </Link>
            <Link
              activeClass="active"
              to="Contact"
              smooth={true}
              duration={1000}
            >
              <ListItem variants={popAnim}>Contact</ListItem>
            </Link>
          </List>
          <Quote variants={fadeAnim}>
            The first step to be respected is to look respectable
          </Quote>
          <SquareTopRight src={SquareImage} variants={fadeAnim} />
          <SquareBottomLeft src={SquareImage} variants={fadeAnim} />
          <Scroll variants={scrollAnim}>
            Scroll
            <Arrow src={RedArrowIcon} variants={shakeAnim} />
          </Scroll>
        </HomeSectionWrapper>
      </HomeSection>
    </ParallaxImg>
  );
};

const HomeSection = styled(motion.section)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ParallaxImg = styled(Parallax)`
  width: 100%;
  min-height: 100vh;
  object-fit: cover;
`;

const WhiteLayer = styled(motion.div)`
  width: 50%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  @media screen and (min-width: 1200px) {
    position: absolute;
    left: 0;
  }
`;

const BlackLayer = styled(motion.div)`
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
  transition: 1s ease;
  @media screen and (min-width: 830px) {
    width: 80%;
  }
`;

const Logo = styled(motion.img)`
  position: absolute;
  left: 0;
  top: 0;
  @media screen and (min-width: 620px) {
    width: 4rem;
  }
`;

const SquareTopRight = styled(motion.img)`
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  @media screen and (min-width: 620px) {
    height: 4rem;
  }
`;

const Cart = styled.img`
  width: 2rem;
  @media screen and (min-width: 820px) {
    width: 3rem;
  }
  @media screen and (min-width: 1200px) {
    width: 3.5rem;
  }
`;
const CartCount = styled.div`
  font-family: "Teko", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  width: 1rem;
  height: 1rem;
  position: absolute;
  color: #00cd46;
  @media screen and (min-width: 820px) {
    width: 2rem;
  }
  @media screen and (min-width: 1200px) {
    left: -1.5rem;
    width: 3rem;
    height: 3rem;
  }
`;
const LinkRoute = styled(LinkRouter)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0.5rem;
  top: 0.5rem;
  width: 3rem;
  height: 3rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  z-index: 500;
  transition: 0.2s ease;
  @media screen and (min-width: 820px) {
    width: 4rem;
    height: 4rem;
    top: 3rem;
    right: 3rem;
  }
  @media screen and (min-width: 1200px) {
    width: 6rem;
    height: 6rem;
  }
  &:hover {
    transform: scale(1.2);
    transition: 0.2s ease;
  }
`;
const HomeArrow = styled.img`
  width: 2.5rem;
  @media screen and (min-width: 820px) {
    width: 3rem;
  }
  @media screen and (min-width: 1200px) {
    width: 3.5rem;
  }
`;
const ArrowWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0.5rem;
  bottom: 0.5rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  z-index: 500;
  transition: 0.2s ease;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  @media screen and (min-width: 820px) {
    right: 3rem;
    bottom: 3rem;
    width: 4rem;
    height: 4rem;
  }
  @media screen and (min-width: 1200px) {
    width: 6rem;
    height: 6rem;
  }
  &:hover {
    transform: scale(1.2);
    transition: 0.2s ease;
  }
`;

const SquareBottomLeft = styled(motion.img)`
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

const Scroll = styled(motion.h1)`
  display: flex;
  align-items: center;
  font-family: "Teko", sans-serif;
  writing-mode: vertical-rl;
  position: absolute;
  right: 0;
  bottom: 0;
  color: #e40000;
  pointer-events: none;
  font-size: 3rem;
`;

const Arrow = styled(motion.img)`
  width: 2rem;
`;

const Quote = styled(motion.q)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 11rem;
  font-size: ${(props) => props.theme.fontS};
  font-weight: 400;
  @media screen and (min-width: 620px) {
    font-size: ${(props) => props.theme.fontM};
    width: 20rem;
  }
  @media screen and (min-width: 1200px) {
    left: 85%;
    top: 60%;
    transform: translate(-85%, -50%);
    font-size: ${(props) => props.theme.fontXXL};
    width: 40rem;
  }
`;

const List = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  font-size: ${(props) => props.theme.fontS};
  height: 40%;
  @media screen and (min-width: 620px) {
    font-size: ${(props) => props.theme.fontM};
    width: 20rem;
  }
`;

const ListItem = styled(motion.button)`
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
      width: 100%;
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

export default Home;
