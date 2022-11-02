import React from "react";
import styled from "styled-components";
import logo from '../../imagens/logo.svg'

 const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg 
      src={logo} 
      alt="logo"/>       
      <p><strong>Books</strong>New</p>
    </LogoContainer>
  );
};

export default Logo

const LogoContainer = styled.div `
  display: flex;
    font-size: 30px;
    gap: 10px;
`

const LogoImg = styled.img`
  margin-right: 10px;
`

