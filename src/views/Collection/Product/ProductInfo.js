import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "../../../components/Button";
import BackIcon from "../../../Assets/BackIcon.svg";
import ArrowIcon from "../../../Assets/Arrow.svg";
import LogoIcon from "../../../Assets/Logo.svg";

const ProductInfo = ({
  productItem,
  setToggleProduct,
  setBigImage,
  bigImageHandler,
  showMobileBigImage,
  cart,
  setCart,
}) => {
  const [description, setDescription] = useState(false);

  const addToCartHandler = () => {
    cart.push(productItem);
    setCart([...cart]);
  };

  const toggleDescription = () => setDescription(!description);
  return (
    <ProductInfoWrapper>
      <IconsWrapper
        onClick={() => {
          setToggleProduct(false);
          setBigImage();
        }}
      >
        <Icon src={BackIcon} />
      </IconsWrapper>
      <Info>
        <ProductName>{productItem.productName}</ProductName>
        <ProductSize>
          Rozmair: {productItem.size}
          <Arrow src={ArrowIcon} />
        </ProductSize>
        <DescriptionButton onClick={toggleDescription}>
          Opis produktu <Arrow src={ArrowIcon} />
          <ProductDescription className={description && "show"}>
            {productItem.description}
          </ProductDescription>
        </DescriptionButton>
        <ProductPrice>{productItem.price}zł</ProductPrice>
        <Button text={"Dodaj do koszyka"} click={addToCartHandler} />
        <Logo src={LogoIcon} alt="Logo Image" />
      </Info>
      <ProductImagesWrapper2>
        {productItem.productPhotos.map((photo) => (
          <ProductImage
            className={showMobileBigImage ? "show" : "hide"}
            src={photo}
            onClick={() => bigImageHandler(photo)}
          />
        ))}
      </ProductImagesWrapper2>
    </ProductInfoWrapper>
  );
};

const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: 60%;
  @media screen and (min-width: 680px) {
    height: 60%;
    justify-content: flex-start;
  }
`;

const ProductName = styled.h2`
  width: 100%;
  font-size: ${(props) => props.theme.fontL};
  margin-bottom: 2rem;
  @media screen and (min-width: 680px) {
    font-size: ${(props) => props.theme.fontXL};
    margin-bottom: 4rem;
  }
`;

const Arrow = styled.img`
  width: 1.5rem;
  margin-left: 1rem;
`;

const Logo = styled.img`
  position: absolute;
  left: 50%;
  bottom: -50%;
  transform: translate(-50%, 50%);
  width: 40rem;
  pointer-events: none;
  opacity: 0.05;
`;

const ProductSize = styled.h4`
  width: 100%;
  font-size: ${(props) => props.theme.fontS};
  margin-bottom: 1rem;
  @media screen and (min-width: 680px) {
    font-size: ${(props) => props.theme.fontM};
    margin-bottom: 2rem;
  }
`;

const ProductDescription = styled.p`
  position: absolute;
  width: auto;
  height: auto;
  padding: 3rem;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s ease;
  z-index: 200;
  text-align: left;
  &.show {
    font-size: ${(props) => props.theme.fontS};
    opacity: 1;
    margin-top: 1rem;
    background: #1b2327;
    border-left: 3px solid #e40000;
    border-right: 3px solid #e40000;
  }
`;

const ProductImagesWrapper2 = styled.div`
  height: 60%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #e40000;
  img {
    width: 25%;
    height: auto;
  }
  @media screen and (min-width: 680px) {
    display: none;
  }
  @media screen and (height: 720px) {
    height: 90%;
    width: 80%;
  }
`;

const ProductInfoWrapper = styled.div`
  position: relative;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 680px) {
    width: 100%;
    height: 100%;
  }
`;

const IconsWrapper = styled.button`
  border: none;
  position: absolute;
  z-index: 200;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  cursor: pointer;
  transition: 0.5s ease;
  @media screen and (min-width: 680px) {
    width: 4rem;
  }
`;

const rotate = keyframes`
  to {
    transform: rotate(-360deg);
  }
`;

const Icon = styled.img`
  z-index: 200;
  width: 3rem;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    animation: ${rotate} 0.5s infinite linear;
  }
  @media screen and (min-width: 680px) {
    width: 4rem;
  }
`;

const Cart = styled.img`
  z-index: 200;
  width: 3rem;
  cursor: pointer;
  transition: 0.5s ease;
  @media screen and (min-width: 680px) {
    width: 4rem;
  }
`;

const ProductPrice = styled.p`
  color: #e40000;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: ${(props) => props.theme.fontM};
  @media screen and (min-width: 830px) {
    font-size: ${(props) => props.theme.fontXL};
  }
`;

const DescriptionButton = styled.button`
  border: none;
  background: none;
  color: white;
  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontS};
  @media screen and (min-width: 680px) {
    font-size: ${(props) => props.theme.fontM};
  }
`;

const ProductImage = styled.img`
  object-fit: cover;
  z-index: 8;
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(0.98);
    transition: 0.5s ease;
  }
  @media screen and (max-width: 680px) {
    margin: 0 1rem;
  }
  @media screen and (min-width: 830px) {
    height: 80%;
    width: 49%;
    margin-left: 1%;
  }
  @media screen and (min-width: 1200px) {
    height: 100%;
    width: 32%;
  }
`;

export default ProductInfo;
