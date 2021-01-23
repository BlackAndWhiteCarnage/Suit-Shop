import GlobalStyles from "./components/GlobalStyles";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs";
import Collection from "./views/Collection/Collection";
import Contact from "./views/Contact/Contact";
import Suits1 from "./Assets/Suits1.jpg";
import Suits2 from "./Assets/Suits2.jpg";
import Suits3 from "./Assets/Suits3.jpg";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
      <Parallax bgImage={Suits2} strength={600}>
        <BlackLayer>
          <SectionHeader>O nas</SectionHeader>
        </BlackLayer>
      </Parallax>
      <AboutUs />
      <Parallax bgImage={Suits1} strength={600}>
        <BlackLayer>
          <SectionHeader>Kolekcja</SectionHeader>
        </BlackLayer>
      </Parallax>
      <Collection />
      <Parallax bgImage={Suits3} strength={600}>
        <BlackLayer>
          <SectionHeader>Kontakt</SectionHeader>
        </BlackLayer>
      </Parallax>
      <Contact />
    </div>
  );
}

// const SectionImage = styled.img`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: -1;
// `;

const BlackLayer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30rem;
  background: rgba(0, 0, 0, 0.7);
`;

const SectionHeader = styled.h1`
  font-size: 3.6rem;
  letter-spacing: 1rem;
  @media screen and (min-width: 620px) {
    font-size: 5rem;
    letter-spacing: 2.5rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 10rem;
    letter-spacing: 5rem;
  }
`;

export default App;
