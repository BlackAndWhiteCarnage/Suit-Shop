import React, { useState } from "react";
import GlobalStyles from "./components/GlobalStyles";
import { Parallax } from "react-parallax";
import styled, { ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs";
import Collection from "./views/Collection/Collection";
import Contact from "./views/Contact/Contact";
import Cart from "./views/Cart/Cart";
import Footer from "./views/Footer/Footer";
import Suits1 from "./Assets/Suits1.jpg";
import Suits2 from "./Assets/Suits2.jpg";
import Suits3 from "./Assets/Suits3.jpg";

//THEME
const theme = {
  primary: "#EAEAEA",
  secondary: "#E40000",
  bgBrighter: "#1B2327",
  bgDarker: "#141C1F",
  fontS: "1.2rem",
  fontM: "1.8rem",
  fontXL: "2.4rem",
  fontXXL: "3.6rem",
};

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" exact>
            <Home cart={cart} />
            <Parallax bgImage={Suits2} strength={200}>
              <BlackLayer>
                <SectionHeader>O nas</SectionHeader>
              </BlackLayer>
            </Parallax>
            <AboutUs />
            <Parallax bgImage={Suits1} strength={200}>
              <BlackLayer>
                <SectionHeader>Kolekcja</SectionHeader>
              </BlackLayer>
            </Parallax>
            <Collection cart={cart} setCart={setCart} />
            <Parallax bgImage={Suits3} strength={200}>
              <BlackLayer>
                <SectionHeader>Kontakt</SectionHeader>
              </BlackLayer>
            </Parallax>
            <Contact />
            <Footer />
          </Route>
          <Route path="/Cart" exact>
            <Cart cart={cart} setCart={setCart} />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

const BlackLayer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50rem;
  background: rgba(0, 0, 0, 0.7);
  @media screen and (max-width: 620px) {
    height: 15rem;
  }
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
