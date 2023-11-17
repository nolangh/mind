import { Container } from "react-bootstrap";
import "./global.scss";
import "./styles/main.css";

const App = () => {
  return (
    <>
      <Container fluid className="main_container">
        main_container
        <div className="title_container">title_container</div>
        <Container fluid className="form_main_container">
          form_main_container
        </Container>
      </Container>
    </>
  );
};

export default App;
