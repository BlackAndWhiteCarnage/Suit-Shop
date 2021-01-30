import React, { useState } from "react";
import styled from "styled-components";
import SliderArrowImage from "../../../Assets/SliderArrow.svg";
import TriangleImage from "../../../Assets/Triangle.svg";

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
      <PrevArrowBtn onClick={prevSlide}>
        <PrevArrow src={SliderArrowImage} />
      </PrevArrowBtn>
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
      <NextArrowBtn onClick={nextSlide}>
        <NextArrow src={SliderArrowImage} />
      </NextArrowBtn>
      <Triangle src={TriangleImage} />
    </OtherProductsWrapper>
  );
};

const OtherProductsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
  width: 100%;
  @media screen and (min-width: 680px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
    min-height: 60%;
  }
`;

const Triangle = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 0;
  right: 0;
  width: 100%;
  opacity: 0.8;
`;

const OtherProductImage = styled.img`
  object-fit: cover;
  cursor: pointer;
  &.show {
    z-index: 20;
    width: 30%;
    height: 80%;
    transition: 1s ease;
    @media screen and (min-width: 680px) {
      width: 40%;
    }
    @media screen and (min-width: 1200px) {
      width: 25rem;
      height: auto;
    }
  }
  &.hide {
    width: 0;
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    pointer-events: none;
  }
`;

const NextArrowBtn = styled.button`
  position: absolute;
  cursor: pointer;
  right: 20%;
  z-index: 200;
  height: 4rem;
  width: 4rem;
  border: none;
  background: none;
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
  }
  @media screen and (min-width: 680px) {
    right: 10%;
  }
`;
const NextArrow = styled.img`
  width: 4rem;
`;

const PrevArrowBtn = styled.button`
  position: absolute;
  cursor: pointer;
  left: 20%;
  z-index: 200;
  width: 4rem;
  height: 4rem;
  transform: rotate(-180deg);
  border: none;
  background: none;
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.2) rotate(-180deg);
    transition: 0.5s ease;
  }
  @media screen and (min-width: 680px) {
    left: 10%;
  }
`;
const PrevArrow = styled.img`
  width: 4rem;
`;

export default OtherProducts;
