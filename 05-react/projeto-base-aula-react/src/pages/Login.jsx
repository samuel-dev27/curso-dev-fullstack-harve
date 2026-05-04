import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function pegarEmail(event) {
    setEmail(event.target.value);
  }

  function pegarSenha(event) {
    setSenha(event.target.value);
  }

  async function enviarDados() {
    try {
      const form = new FormData();
      form.append("email", email);
      form.append("password", senha);

      const resposta = await fetch(
        "https://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
        {
          method: "POST",
          body: form
        },
      );

      const data = await resposta.json();
      
   

    localStorage.setItem("token", data.token);
    localStorage.setItem("nomeUsuario", data.user.name);
    localStorage.setItem("emailUsario", data.user.email);

    navigate("/");

    alert("Logado com sucesso");

     } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      alert("Erro ao fazer login");
    }
  }

  return (
    <div className="divLogin">
      <div className="containerLogin">
        <h1>Login Page</h1>
        <div className="div-input">
          <label>Email: </label>
          <input
            type="email"
            placeholder="Digite seu email"
            onChange={pegarEmail}
          />
        </div>
        <div className="div-input">
          <label>Senha: </label>
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={pegarSenha}
          />
        </div>

        <button type="submit" onClick={enviarDados}>Entrar</button>
      </div>
    </div>
  );
}

export { Login };

// import { useState } from "react";
// import "./login.css";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");

//   let navigate = useNavigate();

//   function pegarEmail(event) {
//     setEmail(event.target.value);
//   }

//   async function submitDadosForm(event) {
//     event.preventDefault();

//     const form = new FormData();
//     form.append("email", email);
//     form.append("password", senha);

//     try {
//       const response = await fetch(
//         "https://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
//         {
//           method: "POST",
//           body: form,
//           mode: "cors",
//         }
//       );

//       const data = await response.json();

//       localStorage.setItem("token", data.token);
//       localStorage.setItem("nomeUsuario", data.user.name);
//       localStorage.setItem("emailUsario", data.user.email);
//       alert("Logado com sucesso");

//       navigate("/");
//     } catch (error) {
//       console.error("Erro ao fazer login:", error.message);
//       alert("Erro ao fazer login");
//     }
//   }

//   return (
//     <div className="divLogin">

//       <div className="containerLogin">
//       <h1>Login Page</h1>
//         <form onSubmit={submitDadosForm}>

//           <div className="div-input">
//             <label htmlFor="email">Email: {email}</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Digite seu email"
//               onChange={pegarEmail}
//             />
//           </div>
//           <div className="div-input">
//             <label htmlFor="senha">Senha: {senha}</label>
//             <input
//               type="password"
//               id="senha"
//               name="senha"
//               placeholder="Digite sua senha"
//               onChange={(event) => setSenha(event.target.value)}
//             />
//           </div>

//           <button type="submit">Entrar</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export { Login };
