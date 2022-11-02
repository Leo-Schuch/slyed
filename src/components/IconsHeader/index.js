import React from "react";
import perfil from '../../imagens/perfil.svg'
import bag from '../../imagens/sacola.svg'
import './style.css'


const IconsHeader = () => {
  const icons = [perfil, bag];
  return (
    <ul className="icons">
      {icons.map((icon) => (
        <li className="icon">
          <img src={icon} alt='icones'></img>
        </li>
      ))}
    </ul>
  );
};

export default IconsHeader;
