import "./revisao.css";

function Nome(props) {
  return (
    <div className="classe-nome">
      {/* <h1> nome {props.children} </h1> */}
      <br />
      <h1>
        {" "}
        {props.nome} {props.sobrenome}{" "}
      </h1>
    </div>
  );
}
export { Nome };
