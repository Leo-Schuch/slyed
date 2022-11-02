import React from "react";
import './style.css'

const OptionList = () => {
  const textOptions = ["Categorias", "Favoritos", "Minha Estante"];
  return (
    <ul className="options">
      {textOptions.map((text) => (
        <li className="option">
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default OptionList;
