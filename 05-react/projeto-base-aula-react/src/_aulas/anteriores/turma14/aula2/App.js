import { Button, Col, Row } from "react-bootstrap";
import { Nome } from "./_aulas/aula1/componentes/Nome";
import "./App.css";
import ControlledCarousel from "./_aulas/aul2/componentes/Carrosel";
import CardCuston from "./_aulas/aul2/componentes/Card";

function App() {
  return (
    <div className="App">
      <p>oi</p>
      <hr />

      <CardCuston />
      <Row>
        <Col md={5}>
          <ControlledCarousel />
        </Col>
        <Col md={4}>
          <ControlledCarousel />
        </Col>
      </Row>

      <Nome />
    </div>
  );
}

export default App;
