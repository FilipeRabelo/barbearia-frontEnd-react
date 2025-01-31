// import { atendimentos_falsos } from "../../mocks/atendimentos";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { BotaoAdd, SpanCard, SubtituloCard, SubtituloH3Card } from "../../globalStyle";
import { Div, DivContainer, Section } from "./style";
import axios from "axios";

export default function Atendimentos() {

  const [listaAtendimentos, setListaAtendimentos] = useState();

  async function buscarAtendimentos() {
    const response = await axios.get('http://127.0.0.1:5000/atendimentos');
    const retorno = await response.data;
    setListaAtendimentos(retorno);
  }

  useEffect(() => {
    buscarAtendimentos();
  }, [])

  return (
    <DivContainer>
      <Div>
        <SubtituloCard>Atendimentos Realizados</SubtituloCard>
        <BotaoAdd to={'/adicionarAtendimentos'}>
          <p>Adicionar Atendimentos</p>
        </BotaoAdd>
      </Div>

      <Section>
        {listaAtendimentos && listaAtendimentos.map((atendimento) => (
          <Card key={atendimento.id}>
            <SubtituloH3Card>
              Data atendimento: <SpanCard>{atendimento.data_atendimento}</SpanCard>
            </SubtituloH3Card>

            <SubtituloH3Card>
              Barbeiro: <SpanCard>{atendimento.id_barbeiro}</SpanCard>
            </SubtituloH3Card>

            <SubtituloH3Card>
              Serviço: <SpanCard>{atendimento.id_servico}</SpanCard>
            </SubtituloH3Card>
          </Card>
        ))}
      </Section>
    </DivContainer>
  )
}