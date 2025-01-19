import { atendimentos_falsos } from "../../mocks/atendimentos";
import { barbeiros_falsos } from "../../mocks/barbeiros";
import { servicos_falsos } from "../../mocks/servicos";

export default function Home() {
  return (
    <>
      <h2>Barbeiros</h2>
      <section>
        {barbeiros_falsos && barbeiros_falsos.map((barbeiro) => (
          <div>
            <h3>
              Nome: <span>{barbeiro.nome}</span>
            </h3>

            <p>
              Cpf: <span>{barbeiro.cpf}</span>
            </p>

            <p>
              Telefone: <span>{barbeiro.telefone}</span>
            </p>
          </div>
        ))}
      </section>

      <hr />

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

      <hr />

      <h2>Atendimentos</h2>
      <section>
        {atendimentos_falsos && atendimentos_falsos.map((atendimento) => (
          <div>
            <h3>
              Data atendimento: <span>{atendimento.dataHora}</span>
            </h3>

            <p>
              Barbeiro: <span>{atendimento.barbeiro}</span>
            </p>

            <p>
              Serviço: <span>{atendimento.servico}</span>
            </p>
          </div>
        ))}
      </section>
    </>
  )
}