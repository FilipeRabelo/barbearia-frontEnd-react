import { Card } from "../../components/Card";
import { SpanCard, SubtituloCard, SubtituloH3Card } from "../../globalStyle";
import { barbeiros_falsos } from "../../mocks/barbeiros";
import { Section } from "./style";

export default function Barbeiros() {
  return (
    <>
      <SubtituloCard>Barbeiros</SubtituloCard>
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
        ))}
      </Section>
    </>
  )
}