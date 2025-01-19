import { atendimentos_falsos } from "../../mocks/atendimentos";

export default function Atendimentos() {
  return (
    <>
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