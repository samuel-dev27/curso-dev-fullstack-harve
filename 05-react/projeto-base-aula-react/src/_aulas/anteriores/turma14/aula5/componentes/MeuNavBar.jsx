import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { TesteContext } from "../hooks/TesteContext";

function MeuNavBar() {
  const { estadoDoDia } = useContext(TesteContext);

  return (
    <>
      <Navbar bg="white" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar TESTE</Navbar.Brand>
          <Nav className="me-auto">
            <label>{estadoDoDia}</label>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export { MeuNavBar };
