import React, { useState } from "react";
import styled from "styled-components";
import SliderArrowImage from "../../../Assets/SliderArrow.svg";

const OtherProducts = ({
  productPhoto,
  setBigImage,
  setToggleProduct,
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
    <OtherProductsWrapper>
      <PrevArrow src={SliderArrowImage} onClick={prevSlide} />
      {productPhoto.map((o) =>
        o.map((item, index) => (
          <OtherProductImage
            className={index === current ? "show" : "hide"}
            src={item.productPhotos[0]}
            onClick={() => {
              setBigImage(item.productPhotos[0]);
              setToggleProduct(true);
              passItemHandler(item);
            }}
          />
        ))
      )}
      <NextArrow src={SliderArrowImage} onClick={nextSlide} />
    </OtherProductsWrapper>
  );
};

const OtherProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35%;
  @media screen and (min-width: 680px) {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 40%;
    height: 50%;
    margin-bottom: 1rem;
  }
`;

const OtherProductImage = styled.img`
  object-fit: cover;
  &.show {
    z-index: 20;
    width: 30%;
    height: 80%;
    transition: 1s ease;
  }
  &.hide {
    width: 0;
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    pointer-events: none;
  }
  @media screen and (min-width: 680px) {
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
  }

  @media screen and (min-width: 830px) {
    height: 80%;
    width: 49%;
    margin-left: 1%;
  }
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

export default OtherProducts;
