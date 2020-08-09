import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../icons/arrow-bottom.svg";

const SelectWrapper = styled.div`
  position: relative;
  display: flex;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

const Select = styled.select`
  border: none;
  padding: 12px 20px;
  display: block;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 5px;
  color: #a3a3a3;
  width: 180px;
  appearance: none;
`;

const SelectInput = ({ options, name, placeholder }) => {
  return (
    <SelectWrapper>
      <Select name={name}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </Select>

      <ArrowIcon />
    </SelectWrapper>
  );
};

export default SelectInput;
