import { Card } from "../../components/Card";
import { SpanCard, SubtituloCard, SubtituloH3Card } from "../../globalStyle";
import { servicos_falsos } from "../../mocks/servicos";
import { Section } from "./style";

export default function Servicos() {
  return (
    <>
      <SubtituloCard>Serviços Disponíveis</SubtituloCard>
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



  // <h2>Serviços</h2>
  //     <section>
  //       {servicos_falsos && servicos_falsos.map((servico) => (
  //         <div>
  //           <h3>
  //             Nome: <span>{servico.nome}</span>
  //           </h3>
  //           <p>
  //             Descrição: <span>{servico.descricao}</span>
  //           </p>
  //           <p>
  //             Valor: <span>R${servico.valor}</span>
  //           </p>
  //           <p>
  //             Percentual: <span>{servico.percentualBarbeiro}%</span>
  //           </p>
  //         </div>
  //       ))}
  //     </section>