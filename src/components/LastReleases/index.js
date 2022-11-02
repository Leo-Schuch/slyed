import React from "react";
import { books } from "./LastReleasesData";
import { Title, BooksContainer, Section } from "../Title/index";
import Card from "../Card";
import bookImage from '../../imagens/livro2.png'

const LastReleases = () => {
  return (
    <Section>
      <Title color="#EB9B00" fontSize="36px" alignItems="center">
        Últimos lançamentos
      </Title>
      <BooksContainer>
        {books.map((book) => (
          <img src={book.src} />
        ))}
      </BooksContainer>
      <Card
        title="Talvez você se interesse por..."
        subtitle="Angular 11"
        description="Construindo aplicação com a plataforma Google"
        img={bookImage}
      />
    </Section>
  );
};

export default LastReleases;
