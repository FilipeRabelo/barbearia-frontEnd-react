// import { servicos_falsos } from "../../mocks/servicos";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { BotaoAdd, SpanCard, SubtituloCard, SubtituloH3Card } from "../../globalStyle";
import { BotaoAddServico, Div, Section } from "./style";
import axios from "axios";

export default function Servicos() {

  const [listaServicos, setListaServicos] = useState();

  async function buscarServicos() {
    const response = await axios.get('http://127.0.0.1:5000/servicos');
    const retorno = await response.data;
    setListaServicos(retorno);
  };

  useEffect(() => {
    buscarServicos()
  }, [])

  return (
    <>
      <Div>
        <SubtituloCard>Serviços Disponíveis</SubtituloCard>
        <BotaoAdd to={'/adicionarServico'}>
            <p>Adicionar Serviço</p>
        </BotaoAdd>
      </Div>
      
      <Section>
        {listaServicos && listaServicos.map((servico) => (
          <Card>
            <SubtituloH3Card>
              Nome: <SpanCard>{servico.nome}</SpanCard>
            </SubtituloH3Card>

            <SubtituloH3Card>
              Descrição: <SpanCard>{servico.descricao}</SpanCard>
            </SubtituloH3Card>

            <SubtituloH3Card>
              Valor: <SpanCard>R$ {servico.valor}</SpanCard>
            </SubtituloH3Card>

            <SubtituloH3Card>
              Percentual: <SpanCard>R$ {servico.percentualBarbeiro}</SpanCard>
            </SubtituloH3Card>
          </Card>
        ))}
      </Section>


    </>
  )
}