import { servicos_falsos } from "../../mocks/servicos";

export default function Servicos() {
  return (
    <>
      <h2>Serviços</h2>
      <section>
        {servicos_falsos && servicos_falsos.map((servico) => (
          <div>
            <h3>
              Nome: <span>{servico.nome}</span>
            </h3>

            <p>
              Descrição: <span>{servico.descricao}</span>
            </p>

            <p>
              Valor: <span>R${servico.valor}</span>
            </p>

            <p>
              Percentual: <span>{servico.percentualBarbeiro}%</span>
            </p>
          </div>
        ))}
      </section>
    </>
  )
}