import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 5px;
  color: #a3a3a3;
  width: 350px;

  ::placeholder {
    color: #a3a3a3;
  }
`;

const TextInput = ({ name, placeholder }) => {
  return <Input type="text" name={name} placeholder={placeholder} />;
};

export default TextInput;
