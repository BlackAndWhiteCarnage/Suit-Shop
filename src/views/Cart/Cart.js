import React, { useState } from "react";
import styled from "styled-components";
import BackIcon from "../../Assets/BackIcon.svg";
import DeleteIcon from "../../Assets/DeleteIcon.svg";
import SquareImage from "../../Assets/SquareImage.svg";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const cartCopy = [...cart];
  let cartValues = cart.map((item) => {
    return item.price;
  });

  const summary = cartValues.reduce((a, b) => a + b);

  const deleteProductHandler = (index) => {
    cartCopy.splice(index, 1);
    setCart(cartCopy);
  };

  return (
    <CartWrapper>
      <HeaderWrapper>
        <Header>Twój koszyk</Header>
        <Link to="/">
          <Icon src={BackIcon} />
        </Link>
        <Line />
      </HeaderWrapper>
      <ProductsWrapper>
        {cart.map((item, index) => (
          <Product key={Math.random() * 1000}>
            <ProductInfo>
              <ProductName>{item.productName}</ProductName>
              <p>{item.price}</p>
            </ProductInfo>
            <ProductImage src={item.productPhotos[0]} />
            <Delete
              src={DeleteIcon}
              onClick={() => {
                deleteProductHandler(index);
              }}
            />
            <Square src={SquareImage} onClick={sum} />
          </Product>
        ))}
      </ProductsWrapper>
      <p>Przedmiotów w koszyku: {cart.length}</p>
      <p>Do zapłaty: {summary}</p>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 100vh;
  background: #141c1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
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
const Header = styled.h3`
  margin-top: 1rem;
`;
const Square = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: rotate(180deg);
`;
const Delete = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 200;
`;
const ProductName = styled.h4`
  font-size: ${(props) => props.theme.fontS};
`;
const ProductImage = styled.img`
  width: 50%;
`;
const ProductInfo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Line = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.2rem;
  background: #e40000;
`;
const Icon = styled.img`
  z-index: 200;
  width: 3rem;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    transform: rotate(-360deg);
    transition: 1s ease;
  }
  @media screen and (min-width: 680px) {
    width: 4rem;
  }
`;
const Product = styled.div`
  position: relative;
  width: 90%;
  height: auto;
  display: flex;
  align-items: center;
  margin: 1rem 0 1rem 0;
`;
const ProductsWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export default Cart;
