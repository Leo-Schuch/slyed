import React from "react";
import perfil from "../../imagens/perfil.svg";
import bag from "../../imagens/sacola.svg";
import styled from "styled-components";



const IconsHeader = () => {
  const icons = [perfil, bag];
  return (
    <Icons>
      {icons.map((icon) => (
        <Icon><img src={icon} alt="icones"></img></Icon>
      ))}
    </Icons>
  );
};

export default IconsHeader;

const Icons = styled.ul`
  display: flex;
  align-items: center;
`;

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`;

