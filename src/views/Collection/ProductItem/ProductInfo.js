import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import BackIcon from "../../../Assets/BackIcon.svg";
import ArrowIcon from "../../../Assets/Arrow.svg";

const ProductInfo = ({
  productItem,
  setToggleProduct,
  setBigImage,
  bigImageHandler,
}) => {
  const [description, setDescription] = useState(false);

  const toggleDescription = () => setDescription(!description);
  return (
    <ProductInfoWrapper>
      <Info>
        <ProductCategory>{productItem.category}</ProductCategory>
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
        <Icon
          src={BackIcon}
          onClick={() => {
            setToggleProduct(false);
            setBigImage();
          }}
        />
        <ProductPrice>{productItem.price}$</ProductPrice>
        <Button text={"Dodaj do koszyka"} />
      </Info>
      <ProductImagesWrapper2>
        {productItem.productPhotos.map((photo) => (
          <ProductImage src={photo} onClick={() => bigImageHandler(photo)} />
        ))}
      </ProductImagesWrapper2>
    </ProductInfoWrapper>
  );
};

const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  height: 50%;
  margin-top: 2rem;
  @media screen and (min-width: 680px) {
    display: block;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    width: 80%;
    height: 40%;
  }
`;

const ProductCategory = styled.h3`
  width: 100%;
  font-size: ${(props) => props.theme.fontS};
  margin-bottom: 3rem;
`;

const ProductName = styled.h2`
  width: 100%;
  font-size: ${(props) => props.theme.fontL};
  margin-bottom: 3rem;
`;

const Arrow = styled.img`
  width: 2rem;
  margin-left: 3rem;
`;

const ProductSize = styled.h4`
  width: 100%;
  font-size: ${(props) => props.theme.fontS};
  margin-bottom: 3rem;
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
  }
`;

const ProductImagesWrapper2 = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid #e40000;
  img {
    width: 30%;
    height: 80%;
    margin: 0.5rem;
  }
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

const ProductInfoWrapper = styled.div`
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 680px) {
    width: 100%;
    height: 100%;
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const ProductPrice = styled.p`
  color: #e40000;
  font-size: ${(props) => props.theme.fontM};
  @media screen and (min-width: 680px) {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media screen and (min-width: 830px) {
    font-size: ${(props) => props.theme.fontM};
  }
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
