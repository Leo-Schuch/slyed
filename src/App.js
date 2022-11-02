import Header from "./components/Header";
import styled from "styled-components";
import Search from "./components/Search";
import LastReleases from "./components/LastReleases";

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LastReleases />
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;
