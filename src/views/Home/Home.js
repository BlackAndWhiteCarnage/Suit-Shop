import React from "react";
import styled from "styled-components";
import HomeImage from "./Home.jpg";
import LogoImage from "../../Assets/Logo.svg";
import SquareImage from "../../Assets/SquareImage.svg";
import RedArrowIcon from "../../Assets/RedArrowIcon.svg";
import CartIcon from "../../Assets/CartIcon.svg";
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
  return (
    <Parallax
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
        {/* Cart */}
        <LinkRouter to="/Cart">
          <CartBtn className={cart.length !== 0 && "toggle"}>
            <Cart src={CartIcon} />
            {cart.length !== 0 && <CartCount>{cart.length}</CartCount>}
          </CartBtn>
        </LinkRouter>
        {/* Styling Layers */}
        <BlackLayer variants={layerAnim} />
        <WhiteLayer variants={layerAnim} />
        {/* Whole Home Section */}
        <HomeSectionWrapper>
          <List variants={listAnim}>
            <Link to="About Us" smooth={true} duration={1000}>
              <ListItem variants={popAnim}>About Us</ListItem>
            </Link>
            <Link to="Collection" smooth={true} duration={1000}>
              <ListItem variants={popAnim}>Collection</ListItem>
            </Link>
            <Link to="Contact" smooth={true} duration={1000}>
              <ListItem variants={popAnim}>Contact</ListItem>
            </Link>
          </List>
          <Quote variants={fadeAnim}>
            The first step to be respected is to look respectable
          </Quote>
          {/* Section Styling Images */}
          <Logo src={LogoImage} alt="Logo Image" variants={fadeAnim} />
          <SquareTopRight src={SquareImage} variants={fadeAnim} />
          <SquareBottomLeft src={SquareImage} variants={fadeAnim} />
          <Scroll variants={scrollAnim}>
            Scroll
            <Arrow src={RedArrowIcon} variants={shakeAnim} />
          </Scroll>
        </HomeSectionWrapper>
      </HomeSection>
    </Parallax>
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
  height: 80%;
  transition: 1s ease;
`;

const List = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  height: 35%;
`;

const ListItem = styled(motion.button)`
  cursor: pointer;
  padding: 2rem;
  border: none;
  background: none;
  color: ${(props) => props.theme.primary};
  font-size: ${(props) => props.theme.fontM};
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

const Cart = styled.img`
  width: 2rem;
  @media screen and (min-width: 820px) {
    width: 3rem;
  }
  @media screen and (min-width: 1200px) {
    width: 3.5rem;
  }
`;

const CartCount = styled.p`
  color: ${(props) => props.theme.secondary};
  font-size: ${(props) => props.theme.fontXL};
  @media screen and (min-width: 820px) {
    font-size: ${(props) => props.theme.fontXXL};
  }
`;

const CartBtn = styled.button`
  border: none;
  position: fixed;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-around;
  right: 0.5rem;
  top: 0.5rem;
  width: 3rem;
  height: 3rem;
  background: rgba(0, 0, 0, 0.4);
  z-index: 500;
  transition: 0.2s ease;
  &.toggle {
    width: 5rem;
  }
  @media screen and (min-width: 620px) {
    width: 4rem;
    height: 4rem;
    &.toggle {
      width: 6rem;
    }
  }
  @media screen and (min-width: 820px) {
    width: 5rem;
    height: 5rem;
    &.toggle {
      width: 8rem;
      &:hover {
        width: 9rem;
      }
    }
    &:hover {
      width: 6rem;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 6rem;
    height: 6rem;
    &:hover {
      width: 7rem;
    }
  }
`;

const Quote = styled(motion.q)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 11rem;
  font-size: ${(props) => props.theme.fontS};
  color: ${(props) => props.theme.primary};
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

const Logo = styled(motion.img)`
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  @media screen and (min-width: 620px) {
    width: 4rem;
  }
`;

const SquareTopRight = styled(motion.img)`
  position: absolute;
  right: 0;
  top: 0;
  pointer-events: none;
  @media screen and (min-width: 620px) {
    width: 4rem;
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
    width: 4rem;
    transform: rotate(180deg);
  }
`;

const Scroll = styled(motion.p)`
  position: absolute;
  display: flex;
  align-items: center;
  writing-mode: vertical-rl;
  right: 0;
  bottom: 0;
  color: ${(props) => props.theme.secondary};
  font-size: ${(props) => props.theme.fontXL};
  pointer-events: none;
`;

const Arrow = styled(motion.img)`
  width: 2rem;
`;

export default Home;
