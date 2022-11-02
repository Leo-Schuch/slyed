import styled from "styled-components";

export const Title = styled.h2 `
  width: 100%;
  padding: 30px 0;
  background-color: #FFF;
  font-size: ${props => props.fontSize || ''};
  text-align: ${props => props.alignItems || ''};
  margin: 0;
  color: ${props => props.color || '#000'};
  
`

export const BooksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  gap: 100px;
  padding-bottom: 30px;
`

export const Section = styled.section`
background-color: #EBECEE;
padding-bottom: 20px;
display: flex;
flex-direction: column;
`