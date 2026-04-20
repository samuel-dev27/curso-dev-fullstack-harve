import { Button, Card } from "react-bootstrap";

function CardProduto({ idProduto, nome, preco, descricao, linkImagem }) {
  return (
    <div>
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
