import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: ${(props) => props.type.bgColor};
  color: ${(props) => props.type.textColor};
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: ${(props) => props.type.fontWeight};

  &:hover {
    background-color: ${(props) => props.type.bgColorHover};
  }
  svg {
    margin-right: 5px;
  }
`;

const buttonType = {
  primary: {
    textColor: "#fff",
    bgColor: "#2a65ea",
    fontWeight: "bold",
    bgColorHover: "#5086ff",
  },
  secondary: {
    textColor: "#303030",
    bgColor: "#fff",
    fontWeight: "normal",
    bgColorHover: "#eff5ff",
  },
};

const ButtonComponent = ({ text, icon, type }) => {
  return (
    <Button type={buttonType[type]}>
      {icon}
      {text}
    </Button>
  );
};

ButtonComponent.defaultProps = {
  type: "primary",
};
export default ButtonComponent;
