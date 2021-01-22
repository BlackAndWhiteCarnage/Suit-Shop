import React, { useState } from "react";
import styled from "styled-components";
import BackIcon from "../Assets/BackIcon.svg";
import LogoImage from "../Assets/Logo.svg";
import SliderArrowImage from "../Assets/SliderArrow.svg";

const ProductItem = ({
  toggleProduct,
  setToggleProduct,
  productItem,
  setBigImage,
  bigImageHandler,
  bigImage,
  productPhoto,
  passItemHandler,
}) => {
  const [current, setCurrent] = useState(0);

  let lenght = productPhoto.map(() => {
    return productPhoto.filter((o) => o.length !== 0);
  });

  const nextSlide = () => {
    setCurrent(current === lenght[0][0].length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? lenght[0][0].length - 1 : current - 1);
  };

  return (
    <>
      {toggleProduct && (
        <ProductItemWrapper className={toggleProduct ? "show" : "hide"}>
          <ProductsWrapper>
            <ProductInfoWrapper>
              <ProductInfo>
                <h1>{productItem.category}</h1>
                <h1>{productItem.productName.toString()}</h1>
                <Icon
                  src={BackIcon}
                  onClick={() => {
                    setToggleProduct(false);
                    setBigImage();
                  }}
                />
                <Price>{productItem.price}$</Price>
                <Button>Add to cart</Button>
                <Line>
                  <Logo src={LogoImage} />
                </Line>
              </ProductInfo>
            </ProductInfoWrapper>
            <OtherProducts>
              <PrevArrow src={SliderArrowImage} onClick={prevSlide} />
              {productPhoto.map((o) =>
                o.map((item, index) => (
                  <OtherProductImage
                    className={index === current ? "show" : "hide"}
                    src={item.productPhotos[0]}
                    onClick={() => {
                      console.log("item", item);
                      console.log("index", index);
                      console.log("current", current);
                      setBigImage(item.productPhotos[0]);
                      setToggleProduct(true);
                      passItemHandler(item);
                    }}
                  />
                ))
              )}
              <NextArrow src={SliderArrowImage} onClick={nextSlide} />
            </OtherProducts>
          </ProductsWrapper>
          <ProductImagesWrapper>
            {productItem.productPhotos.map((photo) => (
              <ProductImage
                src={photo}
                onClick={() => bigImageHandler(photo)}
              />
            ))}
          </ProductImagesWrapper>
          <BigImageWrapper>
            <BigImage src={bigImage} />
          </BigImageWrapper>
        </ProductItemWrapper>
      )}
    </>
  );
};

const ProductItemWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #141c1f;
  z-index: 10;
  display: flex;
  overflow: hidden;
  &.show {
    transition: 0.5s ease;
    opacity: 1;
    pointer-events: all;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &.hide {
    transition: 0.5s ease;
    opacity: 0;
    pointer-events: none;
  }
`;

const ProductInfo = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  width: 80%;
  height: 30%;
`;

const ProductImagesWrapper = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1b2327;
  img {
    width: 60%;
    height: 31%;
  }
`;

const BigImageWrapper = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const BigImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

const ProductInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const OtherProducts = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 40%;
  height: 50%;
  margin-bottom: 1rem;
`;

const Icon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const Price = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  cursor: pointer;
  color: #e40000;
  @media screen and (min-width: 830px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 830px) {
    font-size: 2.4rem;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  border: none;
  background: none;
  color: white;
  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  @media screen and (min-width: 830px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 830px) {
    font-size: 2.4rem;
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

const OtherProductImage = styled.img`
  object-fit: cover;
  z-index: 8;
  cursor: pointer;
  margin: 3rem;
  transition: 1s ease;
  &.show {
    z-index: 20;
    width: 60%;
    height: 100%;
    transition: 1s ease;
    /* & + img,
    & + .hide {
      width: 70%;
      opacity: 1;
      position: static;
    } */
    &:hover {
      transform: scale(0.98);
      transition: 0.5s ease;
    }
  }
  &.hide {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    pointer-events: none;
  }
  @media screen and (min-width: 830px) {
    height: 80%;
    width: 49%;
    margin-left: 1%;
  }
`;

const Line = styled.div`
  position: absolute;
  bottom: -40%;
  width: 100%;
  height: 0.3rem;
  background: #fff;
`;

const NextArrow = styled.img`
  position: absolute;
  cursor: pointer;
  right: 0;
  z-index: 200;
  width: 3rem;
`;
const PrevArrow = styled.img`
  position: absolute;
  cursor: pointer;
  left: -1rem;
  z-index: 200;
  width: 3rem;
  transform: rotate(-180deg);
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15rem;
  opacity: 0.04;
  pointer-events: none;
  z-index: 5;
  @media screen and (min-width: 830px) {
    width: 20rem;
    bottom: -10rem;
  }
  @media screen and (min-width: 1200px) {
    width: 50rem;
    bottom: -30rem;
  }
`;

export default ProductItem;
