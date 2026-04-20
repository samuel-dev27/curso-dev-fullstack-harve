import "./revisao.css"
function Competencias(props) {
  return (
    <div className="classe-competencias">
      <div> {props.nome}</div>

      <div> descrição: {props.descricao}</div>
    </div>
  );
}

export { Competencias };
