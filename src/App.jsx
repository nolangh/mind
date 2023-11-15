import { Container } from "react-bootstrap";
import "./styles/main.css";

const App = () => {
  return (
    <>
      <Container fluid className="main_container">
        main_container
        <Container fluid classname="title_container">
          title_container
        </Container>
      </Container>
    </>
  );
};

export default App;
