// import { Link } from "react-router-dom";
// import { barbeiros_falsos } from "../../mocks/barbeiros";
// import { servicos_falsos } from "../../mocks/servicos";
// import { atendimentos_falsos } from "../../mocks/atendimentos";
import { Card } from "../../components/Card";
import { BotaoAdd, Links, SpanCard, SubtituloCard, SubtituloH3Card } from "../../globalStyle";
import { Div, DivContent, Section } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

  const [listaBarbeiros, setListaBarbeiros] = useState();
  const [listaServicos, setListaServicos] = useState();
  const [listaAtendimentos, setListaAtendimentos] = useState();

  // consultar a api -  usar função assíncrona
  async function buscarBarbeiros() {
    const response = await axios.get('http://127.0.0.1:5000/barbeiros');
    const retorno = await response.data;   // data vem do axios
    setListaBarbeiros(retorno);
  }

  async function buscarServicos() {
    const response = await axios.get('http://127.0.0.1:5000/servicos');
    const retorno = await response.data;
    setListaServicos(retorno);
  };

  async function buscarAtendimentos() {
    const response = await axios.get('http://127.0.0.1:5000/atendimentos');
    const retorno = await response.data;
    setListaAtendimentos(retorno);
  }

  useEffect(() => {
    buscarBarbeiros();
    buscarServicos();
    buscarAtendimentos();
  }, []);

  return (
    <>
      <DivContent>
        <Div>
          <SubtituloCard>Barbeiros</SubtituloCard>
          {/* <Links to={'/barbeiros'}>Ver Barbeiros</Links> */}
          <BotaoAdd to={'/barbeiros'}>
            <p>Ver Barbeiros</p>
          </BotaoAdd>
        </Div>
        <Section>
          {listaBarbeiros && listaBarbeiros.map((barbeiro) => (
            <Card key={barbeiro.id}>
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
          )).slice(0, 5)}
        </Section>
      </DivContent>

      <DivContent>
        <Div>
          <SubtituloCard>Serviços</SubtituloCard>
          {/* <Links to={'/servicos'}>Ver Serviços</Links> */}
          <BotaoAdd to={'/servicos'}>
            <p>Ver Serviços</p>
          </BotaoAdd>
        </Div>
        <Section>
          {listaServicos && listaServicos.map((servico) => (
            <Card key={servico.id}>
              <SubtituloH3Card>
                Nome: <SpanCard>{servico.nome}</SpanCard>
              </SubtituloH3Card>

              <SubtituloH3Card>
                Descrição: <SpanCard>{servico.descricao}</SpanCard>
              </SubtituloH3Card>

              <SubtituloH3Card>
                Valor: <SpanCard>R${servico.valor}</SpanCard>
              </SubtituloH3Card>

              <SubtituloH3Card>
                Percentual: <SpanCard>{servico.percentualBarbeiro}%</SpanCard>
              </SubtituloH3Card>
            </Card>
          )).slice(0, 5)}
        </Section>
      </DivContent>

      <DivContent>
        <Div>
          <SubtituloCard>Atendimentos</SubtituloCard>
          {/* <Links to={'/atendimentos'}>Ver Atendimentos</Links> */}
          <BotaoAdd to={'/atendimentos'}>
            <p>Ver Atendimentos</p>
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
          )).slice(0, 5)}
        </Section>
      </DivContent >

    </>
  )
}