import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { SpanCard, SubtituloCard, SubtituloH3Card } from "../../globalStyle";
import { Section, SectionLink, BotaoAddBarbeiro, Div } from "./style";
// import { Link } from "react-router-dom";
import axios from "axios";

export default function Barbeiros() {

  const [listaBarbeiros, setListaBarbeiros] = useState();

  async function buscarBarbeiros() {
    const response = await axios.get('http://127.0.0.1:5000/barbeiros');
    const retorno = await response.data;
    setListaBarbeiros(retorno);
  }

  useEffect(() => {
    buscarBarbeiros()
  }, [])

  return (
    <>
      <Div>
        <SubtituloCard>Barbeiros</SubtituloCard>
        <BotaoAddBarbeiro to={'/adicionarBarbeiro'}>
          <Card>
            <p>Adicionar Barbeiro</p>
          </Card>
        </BotaoAddBarbeiro>
      </Div>

      <Section>
        {listaBarbeiros && listaBarbeiros.map((barbeiro) => (
          <Card>
            <SubtituloH3Card>
              Nome: <SpanCard>{barbeiro.nome}</SpanCard>
            </SubtituloH3Card>

            <SubtituloH3Card>
              Cpf: <SpanCard>{barbeiro.cpf}</SpanCard>
            </SubtituloH3Card>

            <SubtituloH3Card>
              Telefone: <SpanCard>{barbeiro.telefone}</SpanCard>
            </SubtituloH3Card>
          </Card>
        ))}
      </Section>
      {/* <SectionLink>
        <BotaoAddBarbeiro to={'/adicionarBarbeiro'}>
          <Card>
            <p>Adicionar Barbeiro</p>
          </Card>
        </BotaoAddBarbeiro>
      </SectionLink> */}
    </>
  )
}