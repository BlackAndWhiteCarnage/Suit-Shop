import React, { useState } from "react";
import styled from "styled-components";
import { CollectionData } from "../../Data/CollectionData";
import LogoImage from "../../Assets/Logo.svg";
import ShapeIcon from "../../Assets/ShapeIcon.svg";
import ArrowIcon from "../../Assets/Arrow.svg";
import Dots from "../../components/Dots";
import ScrollIcon from "../../Assets/ScrollIcon.svg";

const Collection = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [productPhoto, setProductPhoto] = useState([]);

  const getProductPhotosHandler = (subCategory) => {
    let data = CollectionData.map((item) =>
      item.products.filter((o) => {
        return o.category === subCategory;
      })
    );

    setProductPhoto(data);
  };

  return (
    <CollectionSection>
      <Categories>
        <MainCategories>
          <Shape src={ShapeIcon} />
          {CollectionData.map((item) => (
            <li
              onClick={() => {
                setSubCategories(item.subCategories.map((i) => i));
              }}
            >
              {item.category}
            </li>
          ))}
          <Arrow src={ArrowIcon} />
        </MainCategories>
        <SubCategories>
          <Logo src={LogoImage} />
          {subCategories.map((subCategory) => (
            <li onClick={() => getProductPhotosHandler(subCategory)}>
              {subCategory}
            </li>
          ))}
          <Scroll src={ScrollIcon} />
        </SubCategories>
        <Dots />
      </Categories>
      <Products>
        {productPhoto.map((o) =>
          o.map((item, index) => {
            return <ProductImage src={item.productPhotos[index]} />;
          })
        )}
        {/* {productPhoto.map((o) =>
          o.map((item) =>
            item.productPhotos.map((src) => <ProductImage src={src} />)
          )
        )} */}
      </Products>
    </CollectionSection>
  );
};

const CollectionSection = styled.section`
  width: 100%;
  height: 100vh;
  background: #141c1f;
  display: flex;
`;

const Categories = styled.div`
  position: relative;
  width: 50%;
  height: 100vh;
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
    height: 100vh;
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
    height: 100vh;
    font-size: 1.4rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.8rem;
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
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 830px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  z-index: 8;
  margin-bottom: 0.5rem;
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
