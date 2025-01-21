import { Card } from "../../components/Card";
import { SpanCard, SubtituloCard, SubtituloH3Card } from "../../globalStyle";
import { atendimentos_falsos } from "../../mocks/atendimentos";
import { Section } from "./style";

export default function Atendimentos() {
  return (
    <>
      <SubtituloCard>Atendimentos Realizados</SubtituloCard>
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
              Serviço: <SpanCard>{atendimento.serviço}</SpanCard>
            </SubtituloH3Card>
          </Card>
        ))}
      </Section>
    </>
  )
}