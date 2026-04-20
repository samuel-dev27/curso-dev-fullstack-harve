import { DadosCandidato } from "../anteriores/aula/DadosCandidato";
import { DadosEndereco } from "../anteriores/aula/DadosEndereco";
import { DadosQualidade } from "../anteriores/aula/DadosQualidade";

function Curriculo() {
  const itensQualidades = [
    "quali 1",
    "quali 2",
    "quali 15",
    "quali 24",
    "quali 13",
    "quali 22",
  ];
  const candidato = { nome: "bruno", idade: 32, telefone: "21212" };

  return (
    <>
      <DadosCandidato meuObjeto={candidato} />
      <DadosCandidato
        meuObjeto={{ nome: "bruno", idade: 32, telefone: "21212" }}
      />
      <DadosEndereco />

      <DadosQualidade itensQualidade={itensQualidades} />
    </>
  );
}

export { Curriculo };
