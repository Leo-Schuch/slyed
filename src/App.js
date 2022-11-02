import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);

  li {
    list-style: none;
  }
`;
