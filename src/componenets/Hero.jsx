import React from "react";
import styled from "styled-components";

import Title from "./Title";
import SelectInput from "../componenets/form-control/SelectInput";
import TextInput from "../componenets/form-control/TextInput";
import Button from "./Buttons";
import { ReactComponent as ImageHero } from "../images/float.svg";

const WrapperHero = styled.div`
  background-color: #eff5ff;
  max-width: 1200px;
  height: 280px;
  border-radius: 5px;
  margin: 60px auto;
  position: relative;

  .search-box {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  > svg {
    position: absolute;
    right: -10px;
    top: -20px;
  }
`;

const Form = styled.form`
  display: flex;
  margin-top: 30px;

  > * {
    margin: 0 10px;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Hero = () => {
  return (
    <WrapperHero>
      <div className="search-box">
        <Title text="Cari barang, tanpa ribet" size="large" />
        <Form>
          <SelectInput options={[]} placeholder="Pilih lokasi iklan" />
          <TextInput
            placeholder="Temukan handphone, mobil dan lainnya"
            name="search"
          />
          <Button text="Cari" type="primary" />
        </Form>
      </div>

      {<ImageHero />}
    </WrapperHero>
  );
};

export default Hero;
