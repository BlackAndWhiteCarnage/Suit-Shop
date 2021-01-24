import React from "react";
import styled from "styled-components";
import AboutUsImage from "./AboutUs.jpg";
import TriangleImage from "./Triangle.svg";
import LogoImage from "../../Assets/Logo.svg";
import XIcon from "../../Assets/XIcon.svg";
import WavesIcon from "../../Assets/WavesIcon.svg";
import ShapeIcon3 from "../../Assets/ShapeIcon3.svg";

const AboutUs = () => {
  return (
    <>
      <AboutUsSection id="About Us">
        <AboutUsSectionImage
          src={AboutUsImage}
          alt="Man looking down the suit"
        />
        <AboutUsSquare>
          <X src={XIcon} />
          <Waves src={WavesIcon} />
          <Shape src={ShapeIcon3} />
        </AboutUsSquare>
        <AboutUsSectionWrapper>
          <Header>
            Who are we?
            <Logo src={LogoImage} />
          </Header>
          <Article>
            We are the small company called Premium. When we started our journay
            My first purpose was to dress every man in town in the best suit
            they ever had. After a while the news about best suits in the town
            spread... Now we are making best suits in whole state, they are
            expensive but made of best of the best materials. And thats why we
            are called Premium.
          </Article>
        </AboutUsSectionWrapper>
        <Triangle src={TriangleImage} />
      </AboutUsSection>
    </>
  );
};

const AboutUsSection = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
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
  font-size: ${(props) => props.theme.fontM};
  margin: 2rem;
  @media screen and (min-width: 830px) {
    font-size: ${(props) => props.theme.fontXL};
    margin: 5rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontXXL};
    margin: 0 15rem;
  }
`;

const Article = styled.article`
  font-size: ${(props) => props.theme.fontS};
  z-index: 10;
  line-height: 2rem;
  margin: 2rem;
  width: 70%;
  @media screen and (min-width: 830px) {
    width: 70%;
    font-size: ${(props) => props.theme.fontM};
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

const Shape = styled.img`
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
