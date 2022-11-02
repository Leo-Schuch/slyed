import React from "react";
import IconsHeader from "../IconsHeader";
import Logo from "../Logo";
import OptionList from "../OptionsList";
import './style.css'

const Header = () => {
  return (
    <header className="App-header">
      <Logo />
      <OptionList />
      <IconsHeader />
    </header>
  );
};

export default Header;
