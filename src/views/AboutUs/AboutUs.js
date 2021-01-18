import React from "react";
import styled from "styled-components";
import AboutUsImage from "./AboutUs.jpg";
import Dots from "../../components/Dots";
import TriangleImage from "./Triangle.svg";
import ScrollIcon from "../../Assets/ScrollIcon.svg";
import LogoImage from "../../Assets/Logo.svg";
import XIcon from "../../Assets/XIcon.svg";
import WavesIcon from "../../Assets/WavesIcon.svg";

const AboutUs = () => {
  return (
    <AboutUsSection>
      <AboutUsSectionImage src={AboutUsImage} alt="Man looking down the suit" />
      <AboutUsSquare>
        <X src={XIcon} />
        <Waves src={WavesIcon} />
        <Scroll src={ScrollIcon} />
        <Dots />
      </AboutUsSquare>
      <AboutUsSectionWrapper>
        <Header>
          Who are we?
          <Logo src={LogoImage} />
        </Header>
        <Article>
          We are the small company called Premium. When we started our journay
          My first purpose was to dress every man in town in the best suit they
          ever had. After a while the news about best suits in the town
          spread... Now we are making best suits in whole state, they are
          expensive but made of best of the best materials. And thats why we are
          called Premium.
        </Article>
      </AboutUsSectionWrapper>
      <Triangle src={TriangleImage} />
    </AboutUsSection>
  );
};

const AboutUsSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
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

const AboutUsSectionImage = styled.img`
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
  width: 70%;
`;

const Header = styled.h1`
  position: relative;
  font-size: 1.8rem;
  margin: 2rem;
  @media screen and (min-width: 830px) {
    font-size: 2.4rem;
    margin: 5rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 3.6rem;
    margin: 0 15rem;
  }
`;

const Article = styled.article`
  font-size: 1.2rem;
  z-index: 10;
  line-height: 2rem;
  margin: 2rem;
  width: 70%;
  @media screen and (min-width: 830px) {
    width: 70%;
    font-size: 1.8rem;
    line-height: 3rem;
    margin: 5rem;
  }
  @media screen and (min-width: 1200px) {
    width: 60%;
    margin: 15rem;
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

const Scroll = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 5;
  @media screen and (min-width: 830px) {
    height: 10rem;
  }
`;

const X = styled.img`
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

const Waves = styled.img`
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
