import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "../../components/Button";
import BackIcon from "../../Assets/BackIcon.svg";
import DeleteIcon from "../../Assets/DeleteIcon.svg";
import SquareImage from "../../Assets/SquareImage.svg";
import CartImage from "./Cart.jpg";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const cartCopy = [...cart];
  let cartValues = cart.map((item) => {
    return item.price;
  });

  let summary = () => {
    console.log(cartValues.length);
    if (cartValues.length !== 0) {
      return cartValues.reduce((a, b) => a + b);
    } else {
      return "0";
    }
  };

  const deleteProductHandler = (index) => {
    cartCopy.splice(index, 1);
    setCart(cartCopy);
  };

  return (
    <CartWrapper>
      <SectionWrapper>
        <HeaderWrapper>
          <Header>Twój koszyk</Header>
          <Link to="/">
            <Icon src={BackIcon} />
          </Link>
          <Line />
        </HeaderWrapper>
        <ProductsWrapper>
          {cart.length !== 0 ? (
            cart.map((item, index) => (
              <Product key={Math.random() * 1000}>
                <ProductInfo>
                  <ProductName>{item.productName}</ProductName>
                  <ProductPrice>{item.price}</ProductPrice>
                </ProductInfo>
                <ProductImage src={item.productPhotos[0]} />
                <Delete
                  src={DeleteIcon}
                  onClick={() => {
                    deleteProductHandler(index);
                  }}
                />
                <Square src={SquareImage} />
              </Product>
            ))
          ) : (
            <EmptyCartInfo>
              Nie masz żadnych przedmiotów w koszyku
            </EmptyCartInfo>
          )}
        </ProductsWrapper>
        <Wrapper>
          <Line />
          <ProductsCount>
            Przedmiotów w koszyku: <span>{cart.length}</span>
          </ProductsCount>
          <TotalCost>
            Do zapłaty: <span>{summary()}</span>
          </TotalCost>
          <Button text={"Zamów"} />
        </Wrapper>
      </SectionWrapper>
      <CartImg src={CartImage} />
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  width: 100%;
  height: 100vh;
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;
const SectionWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 100vh;
  background: #141c1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  button {
    right: 2rem;
    bottom: 2rem;
    @media screen and (min-width: 1200px) {
      right: 4rem;
      bottom: 4rem;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
  }
`;
const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  width: 90%;
  height: 10%;
`;
const EmptyCartInfo = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${(props) => props.theme.fontXL};
`;
const Header = styled.h3`
  margin-top: 1rem;
  font-size: ${(props) => props.theme.fontXL};
`;
const CartImg = styled.img`
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
    width: 40%;
    height: 100%;
    object-fit: cover;
  }
`;
const ProductPrice = styled.p`
  color: #e40000;
  font-size: ${(props) => props.theme.fontM};
`;
const Square = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: rotate(180deg);
`;
const Delete = styled.img`
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
  z-index: 200;
  @media screen and (min-width: 620px) {
    width: 5rem;
  }
`;
const ProductName = styled.h4`
  font-size: ${(props) => props.theme.fontS};
  margin-bottom: 2rem;
  @media screen and (min-width: 620px) {
    font-size: ${(props) => props.theme.fontM};
  }
  @media screen and (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontXL};
  }
`;
const ProductImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  object-fit: cover;
  @media screen and (min-width: 620px) {
    width: 30%;
  }
  @media screen and (min-width: 1200px) {
    width: 25%;
  }
`;
const ProductInfo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Line = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.2rem;
  background: #e40000;
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
const Product = styled.div`
  position: relative;
  width: 90%;
  height: 25rem;
  display: flex;
  align-items: center;
  margin: 1rem 0 1rem 0;
  @media screen and (min-width: 620px) {
    height: 40rem;
  }
`;
const ProductsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 15%;
  div {
    top: 0;
  }
`;
const ProductsCount = styled.h4`
  font-size: ${(props) => props.theme.fontS};
  margin-bottom: 2rem;
  span {
    color: #e40000;
  }
  @media screen and (min-width: 620px) {
    font-size: ${(props) => props.theme.fontM};
  }
`;
const TotalCost = styled.h4`
  font-size: ${(props) => props.theme.fontM};
  span {
    color: #e40000;
  }
`;

export default Cart;
