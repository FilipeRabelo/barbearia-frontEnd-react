import { Button, ContainerForm, DivContainer, GroupForm, Input, Label, Titulo } from './style';
import { useState } from "react";
import axios from "axios";

export default function AdicionarBarbeiro() {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');

  async function cadastrarBarbeiro(event) {
    event.preventDefault();

    const novo_barbeiro = {     // objeto para ser enviado
      nome: nome,
      cpf: cpf,
      telefone: telefone
    }

    await axios.post('http://127.0.0.1:5000/barbeiros', novo_barbeiro);

    setNome();
    setCpf();
    setTelefone();
  }

  return (
    <DivContainer>
      <Titulo>Adicionar novo barbeiro</Titulo>

      <ContainerForm action="" onSubmit={cadastrarBarbeiro}>
        <GroupForm>
          <Label htmlFor="nome">Nome:</Label>
          <Input
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite o nome!"
            onChange={({ target }) => setNome(target.value)}
          />
        </GroupForm>

        <GroupForm>
          <Label htmlFor="cpf">CPF:</Label>
          <Input
            type="text"
            name="cpf"
            id="cpf"
            placeholder="Digite o CPF!"
            onChange={({ target }) => setCpf(target.value)}
          />
        </GroupForm>

        <GroupForm >
          <Label htmlFor="telefone">Telefone:</Label>
          <Input
            type="text"
            name="telefone"
            id="telefone"
            placeholder="Digite o Telefone!"
            onChange={({ target }) => setTelefone(target.value)}
          />
        </GroupForm>

        <Button className="form-button">Enviar</Button>
      </ContainerForm>
    </DivContainer>
  )
}