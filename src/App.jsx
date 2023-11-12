import styled from "styled-components";

const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  background: coral;
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  return (
    <MainContainer className="container-fluid">
      <h1>TESt</h1>
    </MainContainer>
  );
};

export default App;
