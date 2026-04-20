import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { CarrinhoContext } from "../../../../hooks/CarrinhoContext";

function CardProduto({ idProduto, nome, preco, descricao, linkImagem }) {


const {helloWorld } = useContext(CarrinhoContext)


  function adicionarNoCarrinho(
    idProduto,
    nomeProduto,
    precoProduto,
    descricaoProduto,
    linkImagemProduto
  ) {

    helloWorld()
    // alert("Adicionado no carrinho");

    // toast.success('🦄 Adicionado no carrinho', {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: false,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    //   });
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={linkImagem} />
      <Card.Body>
        <Card.Title>
          {nome} - R$: {preco}
        </Card.Title>
        <Card.Text>{descricao}</Card.Text>
        <Button
          variant="primary"
          onClick={() =>
            adicionarNoCarrinho(idProduto, nome, preco, descricao, linkImagem)
          }
        >
          ADICIONAR
        </Button>
      </Card.Body>
    </Card>
  );
}

export { CardProduto };
