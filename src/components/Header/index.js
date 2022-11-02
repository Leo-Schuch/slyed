import React from "react";
import styled from "styled-components";
import IconsHeader from "../IconsHeader";
import Logo from "../Logo";
import OptionList from "../OptionsList";

const Header = () => {
  return (
    <HeaderStyle>
      <Logo />
      <OptionList />
      <IconsHeader />
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.div `
    background-color: #fff;
    display: flex;
    justify-content: center;
`
