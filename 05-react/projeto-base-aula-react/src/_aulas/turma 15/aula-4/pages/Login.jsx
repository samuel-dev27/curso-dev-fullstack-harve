import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  let navigate = useNavigate();

  async function submitFormulario() {
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", senha);

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

      const token = data.token;
      const nomeUsuario = data.user.name;
      const emailUsuario = data.user.email;

      localStorage.setItem("token", token);
      localStorage.setItem("nomeUsuario", nomeUsuario);
      localStorage.setItem("emailUsuario", emailUsuario);

      navigate("/");
    } catch (error) {
      alert("Erro ao realizar login. Verifique suas credenciais e tente novamente.");
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="input-field"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              className="input-field"
              onChange={(event) => setSenha(event.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={submitFormulario}
            className="login-button"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export { Login };