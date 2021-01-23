import React, { useState } from "react";
import styled from "styled-components";
import { CollectionData } from "../../Data/CollectionData";
import LogoImage from "../../Assets/Logo.svg";
import ShapeIcon from "../../Assets/ShapeIcon.svg";
import ArrowIcon from "../../Assets/Arrow.svg";
import ScrollIcon from "../../Assets/ScrollIcon.svg";
import ProductItem from "../../components/ProductItem";

const Collection = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [productPhoto, setProductPhoto] = useState([]);
  const [toggleProduct, setToggleProduct] = useState(false);
  const [productItem, setProductItem] = useState();
  const [bigImage, setBigImage] = useState();

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
    setBigImage(photo);
  };

  return (
    <CollectionSection id="Collection">
      <Categories>
        <MainCategories>
          <Shape src={ShapeIcon} />
          {CollectionData.map((item) => (
            <ListItem
              onClick={() => {
                setSubCategories(item.subCategories.map((i) => i));
              }}
            >
              {item.category}
            </ListItem>
          ))}
          <Arrow src={ArrowIcon} />
        </MainCategories>
        <SubCategories>
          <Logo src={LogoImage} />
          {subCategories.map((subCategory) => (
            <ListItem onClick={() => getProductPhotosHandler(subCategory)}>
              {subCategory}
            </ListItem>
          ))}
          <Scroll src={ScrollIcon} />
        </SubCategories>
      </Categories>
      <Products>
        {productPhoto.map((o) =>
          o.map((item, index) => {
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
      </Products>
      <ProductItem
        toggleProduct={toggleProduct}
        setToggleProduct={setToggleProduct}
        productItem={productItem}
        setBigImage={setBigImage}
        bigImageHandler={bigImageHandler}
        bigImage={bigImage}
        productPhoto={productPhoto}
        passItemHandler={passItemHandler}
      />
    </CollectionSection>
  );
};

const CollectionSection = styled.section`
  width: 100%;
  height: 80vh;
  background: #141c1f;
  display: flex;
  position: relative;
`;

const Categories = styled.div`
  position: relative;
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 830px) {
    flex-direction: row;
  }
`;

const MainCategories = styled.ul`
  position: relative;
  list-style: none;
  width: 100%;
  height: 60%;
  background: #1b2327;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.4rem;
  padding: 1rem;
  @media screen and (min-width: 830px) {
    height: 80vh;
    font-size: 1.8rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 2.4rem;
  }
`;

const Shape = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3rem;
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

const SubCategories = styled.ul`
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
  font-size: 1.2rem;
  padding: 1rem;
  @media screen and (min-width: 830px) {
    height: 80vh;
    font-size: 1.4rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.8rem;
  }
`;

const ListItem = styled.button`
  background: none;
  border: none;
  font-size: 1.8rem;
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
  @media screen and (min-width: 830px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

const Scroll = styled.img`
  position: absolute;
  right: 0;
  bottom: 1rem;
  z-index: 5;
  @media screen and (min-width: 830px) {
    height: 8rem;
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

const Products = styled.div`
  width: 50%;
  height: 80vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 830px) {
    flex-direction: row;
    flex-wrap: wrap;
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
  height: 50%;
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
