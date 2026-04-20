import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

function GerenciarLogin() {
  const [token, setToken] = useState();

  function pegarLocalStorage() {
    const token = localStorage.getItem("token");
    const nomeUsuario = localStorage.getItem("nomeUsuario");
    const emailUsuario = localStorage.getItem("emailUsuario");

    setToken(token);
  }

  function removerDadosLocalStorage() {
    localStorage.removeItem("token");
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("emailUsario");
    pegarLocalStorage();
  }

  useEffect(() => {
    pegarLocalStorage();
  }, []);

  if (!token) {
    return (
      <Row>
        <Col md={12}>
          <a href="/login">
            <Button variant="primary">Login</Button>{" "}
          </a>
        </Col>
      </Row>
    );
  }

  return (
    <Row>
      <Col md={7}>
        <i className="fa fa-user"> nome:</i>
        <i className="fa fa-at"> email:</i>
      </Col>
      <Col md={12}>
        <Button variant="danger">Sair</Button>{" "}
      </Col>
    </Row>
  );
}

export { GerenciarLogin };
