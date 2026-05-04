import { Container, Nav, Navbar } from "react-bootstrap";
import { GerenciarLogin } from "./GerenciarLogin";
import { GerenciarLoginInicial } from "./GerenciarLoginInicial";
import { GerenciadorDeLogin } from "./gerenciadorDeLogin";


function NavBar(props) {
  return (
    <Container>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {/* <GerenciarLoginInicial /> */}
              <GerenciadorDeLogin />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ marginTop: "100px" }}>{props.children}</div>
    </Container>
  );
}

export default NavBar;
