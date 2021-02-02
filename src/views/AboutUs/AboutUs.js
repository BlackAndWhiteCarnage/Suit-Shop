import React from "react";
import styled from "styled-components";
import AboutUsImage from "./AboutUs.jpg";
import TriangleImage from "./Triangle.svg";
import LogoImage from "../../Assets/Logo.svg";
import XIcon from "../../Assets/XIcon.svg";
import WavesIcon from "../../Assets/WavesIcon.svg";
import ShapeIcon3 from "../../Assets/ShapeIcon3.svg";
import ArrowUp from "../../Assets/ArrowUp.svg";
import { motion } from "framer-motion";
import {
  containerAnim,
  scaleAnim,
  scaleRotateAnim,
  fadeAnim,
} from "../../components/FramerMotion";
import { useScroll } from "../../components/useScroll";

const AboutUs = () => {
  const [element, controls] = useScroll();

  const scrollTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AboutUsSection
      id="About Us"
      variants={containerAnim}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <AboutUsSectionImage
        src={AboutUsImage}
        alt="Man looking down the suit"
        variants={scaleAnim}
      />
      <ArrowWrapper onClick={scrollTopHandler} variants={fadeAnim}>
        <HomeArrow src={ArrowUp} />
      </ArrowWrapper>
      <AboutUsSquare>
        <X src={XIcon} variants={scaleRotateAnim} />
        <Waves src={WavesIcon} variants={scaleRotateAnim} />
        <Shape src={ShapeIcon3} variants={scaleRotateAnim} />
      </AboutUsSquare>
      <AboutUsSectionWrapper>
        <Header variants={scaleAnim}>
          Who are we?
          <Logo src={LogoImage} />
        </Header>
        <Article variants={fadeAnim}>
          We are the small company called Suitsless. When we started our journay
          My first purpose was to dress every man in town in the best suit they
          ever had. After a while the news about best suits in the town
          spread... Now we are making best suits in whole state, they are
          expensive but made of best of the best materials. And thats why we are
          called Suitsless.
        </Article>
      </AboutUsSectionWrapper>
      <Triangle src={TriangleImage} />
    </AboutUsSection>
  );
};

const AboutUsSection = styled(motion.section)`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const ArrowWrapper = styled(motion.button)`
  border: none;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0.5rem;
  bottom: 0.5rem;
  background: rgba(0, 0, 0, 0.4);
  z-index: 500;
  transition: 0.2s ease;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  @media screen and (min-width: 820px) {
    width: 4rem;
    height: 4rem;
    &:hover {
    width: 5rem;
    transition: 0.2s ease;
  }
  }
  @media screen and (min-width: 1200px) {
    width: 6rem;
    height: 6rem;
    &:hover {
    width: 7rem;
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

const AboutUsSquare = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 90%;
  z-index: 8;
  @media screen and (min-width: 830px) {
    width: 80%;
  }
`;

const AboutUsSectionImage = styled(motion.img)`
  width: 30%;
  height: 100vh;
  object-fit: cover;
`;

const AboutUsSectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #141c1f;
`;

const Header = styled(motion.h1)`
  position: relative;
  font-size: ${(props) => props.theme.fontM};
  margin: 2rem;
  @media screen and (min-width: 620px) {
    font-size: ${(props) => props.theme.fontXL};
    margin: 0 0 0 5rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontXXL};
    margin: 10rem 0 0 15rem;
  }
`;

const Article = styled(motion.article)`
  font-size: ${(props) => props.theme.fontS};
  z-index: 10;
  line-height: 2rem;
  margin: 2rem;
  width: 70%;
  @media screen and (min-width: 620px) {
    width: 70%;
    font-size: ${(props) => props.theme.fontM};
    line-height: 3rem;
    margin: 5rem;
  }
  @media screen and (min-width: 1200px) {
    width: 60%;
    height: 50%;
    margin: 5rem 0 0 15rem;
    line-height: 4rem;
  }
`;

const Triangle = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  @media screen and (min-width: 620px) {
    width: 80%;
    right: 0;
  }
`;

const Shape = styled(motion.img)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 5;
  @media screen and (min-width: 830px) {
    height: 10rem;
  }
`;

const X = styled(motion.img)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 5;
  @media screen and (min-width: 830px) {
    height: 5rem;
  }
`;

const Logo = styled.img`
  position: absolute;
  left: 0;
  bottom: -5rem;
  width: 10rem;
  opacity: 0.1;
  z-index: 5;
  @media screen and (min-width: 830px) {
    width: 20rem;
    bottom: -10rem;
  }
  @media screen and (min-width: 1200px) {
    width: 30rem;
    bottom: -30rem;
  }
`;

const Waves = styled(motion.img)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 5rem;
  z-index: 5;
  @media screen and (min-width: 830px) {
    width: 10rem;
  }
`;

export default AboutUs;
