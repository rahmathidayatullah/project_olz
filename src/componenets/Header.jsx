import React from "react";
import Button from "./Buttons";
import styled from "styled-components";
import { ReactComponent as CameraIcon } from "../icons/Vector.svg";

const Header = styled.header`
  background-color: #fff;
  max-width: 1200px;
  padding: 10px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.div`
  display: flex;
  align-items: stretch;
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

const Logo = styled.h1`
  color: #2a65ea;
  font-size: 24px;
`;

const HeaderComponent = () => {
  return (
    <Header>
      <div className="logo">
        <Logo>OLZ</Logo>
      </div>
      <Menu>
        <Button type="secondary" text="Login/Daftar" />
        <Button type="primary" text="Jual" icon={<CameraIcon />} />
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
