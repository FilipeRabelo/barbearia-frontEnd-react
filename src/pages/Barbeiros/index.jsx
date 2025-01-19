import { barbeiros_falsos } from "../../mocks/barbeiros";

export default function Barbeiros() {
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
    </>
  )
}