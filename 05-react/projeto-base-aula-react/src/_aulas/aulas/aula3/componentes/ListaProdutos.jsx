import { useEffect, useState } from "react";
import api from "../../../../_service/api";
import CardProduto from "./CardProduto";
import { Col, Row } from "react-bootstrap";

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    listarProdutos();
  }, []);
  
  async function listarProdutos() {
    console.log("listaUser");

    try {
      const response = await api.get("/productlistbyremark/home");
      setProdutos(response.data);
    } catch (error) {
      alert("DEU ERRO");
    }
  }

 

  return (
    <div>
      <h2>ListaProdutos</h2>

      <Row>
        {produtos.map((produto) => {
          return (
            <Col md={3}>
              <CardProduto
                idProduto={produto.id}
                nome={produto.title}
                preco={produto.price}
                descricao={produto.category}
                linkImagem={produto.image}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ListaProdutos;
