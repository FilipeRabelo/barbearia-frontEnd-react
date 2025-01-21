import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { Links, SpanCard, SubtituloCard, SubtituloH3Card } from "../../globalStyle";
import { atendimentos_falsos } from "../../mocks/atendimentos";
import { barbeiros_falsos } from "../../mocks/barbeiros";
import { servicos_falsos } from "../../mocks/servicos";
import { Div, Section } from "./style";

export default function Home() {
  return (
    <>
      <Div>
        <SubtituloCard>Barbeiros</SubtituloCard>
        <Links to={'/barbeiros'}>Ver Barbeiros</Links>
      </Div>
      <Section>
        {barbeiros_falsos && barbeiros_falsos.map((barbeiro) => (
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
        )).slice(0,5)}        
      </Section>
      

      <Div>
        <SubtituloCard>Serviços</SubtituloCard>
        <Links to={'/servicos'}>Ver Serviços</Links>
      </Div>
      <Section>
        {servicos_falsos && servicos_falsos.map((servico) => (
          <Card>
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
      

      <Div>
        <SubtituloCard>Atendimentos</SubtituloCard>
        <Links to={'/atendimentos'}>Ver Atendimentos</Links>
      </Div>
      <Section>
        {atendimentos_falsos && atendimentos_falsos.map((atendimento) => (
          <Card>
            <SubtituloH3Card>
              Data atendimento: <SpanCard>{atendimento.dataHora}</SpanCard>
            </SubtituloH3Card>

            <SubtituloH3Card>
              Barbeiro: <SpanCard>{atendimento.barbeiro}</SpanCard>
            </SubtituloH3Card>

            <SubtituloH3Card>
              Serviço: <SpanCard>{atendimento.servico}</SpanCard>
            </SubtituloH3Card>
          </Card>
        )).slice(0, 5)}
      </Section>
    </>
  )
}