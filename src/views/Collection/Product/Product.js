import React, { useState } from "react";
import styled from "styled-components";
import ProductInfo from "./ProductInfo";
import OtherProducts from "./OtherProducts";

const ProductItem = ({
  toggleProduct,
  setToggleProduct,
  productItem,
  setBigImage,
  bigImageHandler,
  bigImage,
  productPhoto,
  passItemHandler,
  showBigImage,
  setShowBigImage,
}) => {
  return (
    <>
      {toggleProduct && (
        <ProductItemWrapper className={toggleProduct ? "show" : "hide"}>
          <ProductsWrapper>
            {/* PRODUCT INFO */}
            <ProductInfo
              setBigImage={setBigImage}
              productItem={productItem}
              setToggleProduct={setToggleProduct}
              bigImageHandler={bigImageHandler}
            />
            {/* OTHER PRODUCTS SLIDER */}
            <OtherProducts
              productPhoto={productPhoto}
              setBigImage={setBigImage}
              passItemHandler={passItemHandler}
              setToggleProduct={setToggleProduct}
            />
          </ProductsWrapper>
          {/* MULTIPE PRODUCT IMAGES */}
          <ProductImagesWrapper>
            {productItem.productPhotos.map((photo) => (
              <ProductImage
                src={photo}
                onClick={() => bigImageHandler(photo)}
              />
            ))}
          </ProductImagesWrapper>
          {/* HERO PRODUCT IMAGE */}
          <BigImageWrapper className={showBigImage ? "show" : "hide"}>
            <BigImage
              className={showBigImage ? "show" : "hide"}
              src={bigImage}
              onClick={() => setShowBigImage(!showBigImage)}
            />
          </BigImageWrapper>
        </ProductItemWrapper>
      )}
    </>
  );
};

const ProductItemWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #141c1f;
  z-index: 10;
  display: flex;
  overflow: hidden;
  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
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

const ProductImagesWrapper = styled.div`
  display: none;
  height: 20%;
  background-color: green;
  @media screen and (min-width: 680px) {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #1b2327;
    img {
      width: 60%;
      height: 31%;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 10%;
  }
`;

const BigImageWrapper = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  &.show {
    position: fixed;
    justify-content: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 200;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  @media screen and (min-width: 1200px) {
    width: 20%;
  }
`;

const BigImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: 0.5s ease;
  &.show {
    width: auto;
    height: 100vh;
  }
`;

const ProductsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 680px) {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
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

export default ProductItem;
