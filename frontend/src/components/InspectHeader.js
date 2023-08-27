import React from "react";
import { ReactComponent as HomeIcon } from ".././asset/Home.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const InspectHeaderBox = styled.header`
  padding: 35px 20px;
  border-bottom: 4px solid;
  position: relative;
  cursor: pointer;
`;

const HeaderText = styled.h2`
  color: #796b5d;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 35px;
`;

export default function InspectHeader({ text }) {
  const navigate = useNavigate(); // Move the hook inside the functional component

  const handleHomeClick = () => {
    navigate("/Main");
  };

  return (
    <InspectHeaderBox onClick={handleHomeClick}>
      <HomeIcon />
      <HeaderText>{text}</HeaderText>
    </InspectHeaderBox>
  );
}
