import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import api from "../_service/api";
import { toast } from "react-toastify";
import { CardProduto } from "../_aulas/turma 15/aula-3/componentes/CardProduto";

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  async function buscarProdutos() {
    try {
      const { data } = await api.get("/productlistbyremark/home");

      setProdutos(data);
    } catch (error) {
      alertaErro("Não foi possivel buascar os produtos");
    }
  }

  function alertaErro(mensagem) {
    toast.error(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  
  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h1>Lista de Produtos</h1>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        {produtos.map(({ title, price, image, category }) => {
          return (
            <>
              <CardProduto
                nome={title}
                preco={price}
                linkImagem={image}
                descricao={category}
              />
            </>
          );
        })}
      </Row>
    </>
  );
}

export { ListaProdutos };
