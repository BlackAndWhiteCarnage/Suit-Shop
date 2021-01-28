import React, { useState } from "react";
import styled from "styled-components";
import { CollectionData } from "../../Data/CollectionData";
import { motion } from "framer-motion";
import { useScroll } from "../../components/useScroll";
import LogoImage from "../../Assets/Logo.svg";
import ShapeIcon from "../../Assets/ShapeIcon.svg";
import ShapeIcon4 from "../../Assets/ShapeIcon4.svg";
import ArrowIcon from "../../Assets/Arrow.svg";
import ProductItem from "./Product/Product";
import {
  containerAnim,
  scaleAnim,
  scaleRotateAnim,
  listAnim,
  popAnim,
} from "../../components/FramerMotion";

const Collection = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [productPhoto, setProductPhoto] = useState([]);
  const [toggleProduct, setToggleProduct] = useState(false);
  const [productItem, setProductItem] = useState();
  const [bigImage, setBigImage] = useState();
  const [showBigImage, setShowBigImage] = useState(false);

  const [element, controls] = useScroll();

  const getProductPhotosHandler = (subCategory) => {
    let data = CollectionData.map((item) =>
      item.products.filter((o) => {
        return o.category === subCategory;
      })
    );

    setProductPhoto(data);
  };

  const passItemHandler = (item) => {
    setProductItem(item);
  };

  const bigImageHandler = (photo) => {
    if (window.innerWidth < 680) {
      setBigImage(photo);
      setShowBigImage(!showBigImage);
    }

    setBigImage(photo);
  };

  return (
    <CollectionSection
      id="Collection"
      variants={containerAnim}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Categories>
        {/* MAIN CATEGORIES */}
        <MainCategories variants={listAnim}>
          <Shape src={ShapeIcon} />
          {CollectionData.map((item) => (
            <ListItem
              variants={popAnim}
              onClick={() => {
                setSubCategories(item.subCategories.map((i) => i));
              }}
            >
              {item.category}
            </ListItem>
          ))}
          <Arrow src={ArrowIcon} />
        </MainCategories>
        {/* SUB CATEGORIES */}
        <SubCategories variants={listAnim}>
          <Logo src={LogoImage} />
          {subCategories.map((subCategory) => (
            <ListItem
              variants={popAnim}
              onClick={() => getProductPhotosHandler(subCategory)}
            >
              {subCategory}
            </ListItem>
          ))}
          <Shape2 src={ShapeIcon4} />
        </SubCategories>
      </Categories>
      {/* PRODUCTS IMAGES */}
      <ProductsImages>
        {productPhoto.map((o) =>
          o.map((item) => {
            return (
              <ProductImageWrapper
                onClick={() => {
                  setBigImage(item.productPhotos[0]);
                  setToggleProduct(true);
                  passItemHandler(item);
                }}
              >
                <ProductImage src={item.productPhotos[0]} />
              </ProductImageWrapper>
            );
          })
        )}
      </ProductsImages>
      {/* PRODUCT CHOOSEN FROM IMAGES  */}
      <ProductItem
        toggleProduct={toggleProduct}
        setToggleProduct={setToggleProduct}
        productItem={productItem}
        setBigImage={setBigImage}
        bigImageHandler={bigImageHandler}
        bigImage={bigImage}
        productPhoto={productPhoto}
        passItemHandler={passItemHandler}
        showBigImage={showBigImage}
        setShowBigImage={setShowBigImage}
      />
    </CollectionSection>
  );
};

const CollectionSection = styled(motion.section)`
  width: 100%;
  height: 100vh;
  background: #141c1f;
  display: flex;
  position: relative;
  @media screen and (min-width: 830px) {
    height: 80vh;
  }
`;

const Categories = styled.div`
  position: relative;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 830px) {
    flex-direction: row;
    height: 80vh;
  }
`;

const MainCategories = styled(motion.ul)`
  position: relative;
  list-style: none;
  width: 100%;
  height: 60%;
  background: #1b2327;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: ${(props) => props.theme.fontS};
  padding: 1rem;
  @media screen and (min-width: 830px) {
    height: 80vh;
    font-size: ${(props) => props.theme.fontM};
  }
  @media screen and (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontXL};
  }
`;

const Shape = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3rem;
`;

const Shape2 = styled.img`
  position: absolute;
  right: 0;
  bottom: 1rem;
  z-index: 5;
  @media screen and (min-width: 830px) {
    height: 3rem;
  }
`;

const Arrow = styled.img`
  position: absolute;
  bottom: 0.5rem;
  right: 50%;
  transform: translate(-50%, 0);
  @media screen and (min-width: 830px) {
    transform: rotate(-90deg);
    bottom: 50%;
    right: 1rem;
  }
`;

const SubCategories = styled(motion.ul)`
  position: relative;
  width: 100%;
  height: 40%;
  background: #141c1f;
  display: flex;
  flex-direction: column;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  @media screen and (min-width: 830px) {
    height: 80vh;
  }
`;

const ListItem = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  width: fit-content;
  &::before {
    content: "";
    position: absolute;
    left: -0.5rem;
    width: 0.5rem;
    height: 100%;
    background: rgba(255, 255, 255, 1);
    transition: 0.5s ease;
  }
  &:hover,
  :focus {
    outline: none;
    &::before {
      transition: 0.5s ease;
      width: 100%;
      background: rgba(255, 255, 255, 0.3);
    }
  }
  @media screen and (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontM};
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15rem;
  opacity: 0.1;
  pointer-events: none;
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

const ProductsImages = styled.div`
  width: 50%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background: #1b2327;
  @media screen and (min-width: 830px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: 80vh;
  }
`;

const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: 1s ease;
  &:hover {
    transform: scale(1.1);
    transition: 4s ease;
  }
`;

const ProductImageWrapper = styled.button`
  width: 100%;
  min-height: 80%;
  object-fit: cover;
  z-index: 8;
  margin-bottom: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s ease;
  &:focus {
    outline: none;
    transform: scale(0.9);
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

export default Collection;
