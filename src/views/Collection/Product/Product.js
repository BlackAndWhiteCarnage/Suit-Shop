import React from "react";
import styled from "styled-components";
import ProductInfo from "./ProductInfo";
import OtherProducts from "./OtherProducts";
import VistulaInfo from "../../../components/VistulaInfo";

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
  cart,
  setCart,
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
              cart={cart}
              setCart={setCart}
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
              <ProductBtn onClick={() => bigImageHandler(photo)}>
                <ProductImage src={photo} />
              </ProductBtn>
            ))}
          </ProductImagesWrapper>
          {/* HERO PRODUCT IMAGE */}
          <BigImageWrapper
            onClick={() => setShowBigImage(!showBigImage)}
            className={showBigImage ? "show" : "hide"}
          >
            <BigImageBtn onClick={() => setShowBigImage(!showBigImage)}>
              <BigImage
                className={showBigImage ? "show" : "hide"}
                src={bigImage}
              />
            </BigImageBtn>
            <VistulaInfo />
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
    display: none;
    transition: 0.5s ease;
    opacity: 0;
    pointer-events: none;
  }
`;

const ProductImagesWrapper = styled.div`
  height: 20%;
  display: none;
  @media screen and (min-width: 680px) {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 1200px) {
    width: 10%;
  }
`;

const BigImageWrapper = styled.div`
  position: relative;
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
    background: rgba(0, 0, 0, 0.7);
  }
  @media screen and (min-width: 1200px) {
    width: 20%;
  }
`;

const BigImageBtn = styled.button`
  border: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: 0.5s ease;
  &.show {
    height: 100vh;
  }
`;
const BigImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: 0.5s ease;
  &.show {
    height: 100vh;
    width: 30%;
    @media screen and (max-width: 680px) {
      width: 100%;
    }
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
  position: absolute;
  width: 100%;
  height: 95%;
  object-fit: cover;
  z-index: 8;
  cursor: pointer;
  transition: 0.3s ease;
  @media screen and (min-width: 620px) {
    width: 100%;
  }
  &:hover {
    transform: scale(0.98);
    transition: 0.5s ease;
  }
`;

const ProductBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  z-index: 8;
  cursor: pointer;
  height: 100%;
  width: 80%;
  transition: 0.3s ease;
`;

export default ProductItem;
