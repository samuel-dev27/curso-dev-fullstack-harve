import "./meucard.css";

function MeuCard(props) {
  return (
    <div className={`corFundo ${props.corFundoClass}`} style={{
      background: props.minhaCor
    }}>
      <div className="caixinha">div 10</div>
      <div className="caixinha">div 2</div>
    </div>
  );
}

export { MeuCard };
