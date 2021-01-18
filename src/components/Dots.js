import React from "react";
import styled from "styled-components";

const Dots = () => {
  return (
    <List>
      <li>
        <Dot />
      </li>
      <li>
        <Dot />
      </li>
      <li>
        <Dot />
      </li>
      <li>
        <Dot />
      </li>
    </List>
  );
};

const List = styled.ul`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20%;
  list-style: none;
`;

const Dot = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  background: #eaeaea;
  border-radius: 50%;
`;

export default Dots;
