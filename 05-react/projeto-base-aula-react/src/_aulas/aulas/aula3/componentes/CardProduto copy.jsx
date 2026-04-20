import { Button, Card } from "react-bootstrap";

// idProduto, nome, preco, descricao, linkImagem
function CardProduto({ idProduto, nome, preco, descricao, linkImagem }) {
  return (
    <div>
      {/* <h2>idProduto: {idProduto}</h2>
      <h2>nome: {nome}</h2>
      <h2>preco: {preco}</h2>
      <h2>descricao: {descricao}</h2>
      <img src={linkImagem} alt="" srcset=""  width={200}/> */}

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={linkImagem} />
        <Card.Body>
          <Card.Title>{nome}</Card.Title>
          <Card.Text>
            {preco} - {descricao}
          </Card.Text>
          <Button variant="primary">Adicinar</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardProduto;
