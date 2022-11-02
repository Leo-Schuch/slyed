import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../Input";
import { books } from "./SearchData";

const Search = () => {
  const [typedBooks, setTypedBooks] = useState([]);

  return (
    <SearchContainer>
      <Title>Olá</Title>
      <SubTitle>Encontre seu livro em nossa loja.</SubTitle>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(event) => {
          const typedBooks = event.target.value;
          const SearchResult = books.filter((books) =>
            books.name.includes(typedBooks)
          );
          setTypedBooks(SearchResult);
        }}
      />
      {typedBooks.map((books) => (
        <div>
          <p>{books.name}</p>
          <img src={books.src} />
        </div>
      ))}
    </SearchContainer>
    
  );
};

export default Search;

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326590 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

