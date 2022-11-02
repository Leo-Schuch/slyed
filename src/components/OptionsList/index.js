import React from "react";
import styled from "styled-components";

const OptionList = () => {
  const textOptions = ["Categorias", "Favoritos", "Minha Estante"];
  return (
    <Options>
      {textOptions.map((text) => (
        <Option>
          <p>{text}</p>
        </Option>
      ))}
    </Options>
  );
};

export default OptionList;

const Options = styled.ul`
  display: flex;
`;

const Option = styled.li`
  font-size: 16px;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  font-weight: bold;
`;
