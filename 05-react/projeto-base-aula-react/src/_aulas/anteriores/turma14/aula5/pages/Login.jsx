import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./login.css"
function Login() {
  const [senha, setSenha] = useState("");

  let navigate = useNavigate();

  const [email, setEmail] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangeSenha(event) {
    setSenha(event.target.value);
  }

  async function getEventForm(event) {
    event.preventDefault();

    console.log(email, senha);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", senha);

    try {
      const options = {
        method: "POST",
        mode: "cors",
        body: formData,
      };

      const response = await fetch(
        "http://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
        options
      );
      const data = await response.json();
      console.log(data);

      const token = data.token;
      const nomeUsuario = data.user.name;
      const emailUsario = data.user.email;

      localStorage.setItem("token", token);
      localStorage.setItem("nomeUsuario", nomeUsuario);
      localStorage.setItem("emailUsario", emailUsario);

      alert("Logado com sucesso");

      navigate("/");
    } catch (error) {
      alert("tu é burro");
    }
  }

  return (
    <div className="main">
      <Row>
        <Col md={6}>
          <img width="60%" src="https://empreender.com.br/wp-content/uploads/2023/08/461775011-1-1440x720.jpg" />
        </Col>
        <Col md={6}>
          <form className="form" onSubmit={getEventForm}>
            <div>
              <p>{email}</p>
              <input
                type="email"
                placeholder="Digite seu email"
                onChange={onChangeEmail}
              />
            </div>
            <div>
              <p>{senha}</p>
              <input
                type="password"
                placeholder="Digite a sua senha"
                onChange={onChangeSenha}
              />
            </div>
            <Button Button type="submit">
              Enviar
            </Button>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
