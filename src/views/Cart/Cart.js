import React from "react";
import styled from "styled-components";

const Cart = ({ cart }) => {
  return (
    <CartWrapper>
      <Header>Twój koszyk</Header>
      {cart.map((item) => (
        <h1>{item.productName}</h1>
      ))}
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #141c1f;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.h3`
  width: 90%;
  height: 20%;
`;

export default Cart;
