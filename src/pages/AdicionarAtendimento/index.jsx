import { Button, ContainerForm, DivContainer, GroupForm, Input, Label, Titulo } from './style';
import { useState } from "react";
import axios from "axios";

export default function AdicionarAtendimentos() {

  const [dataAtendimento, setDataAtendimento] = useState('');
  const [barbeiro, setBarbeiro] = useState('');
  const [servico, setServico] = useState('');

  async function cadastrarAtendimento(event) {
    event.preventDefault();

    const novo_atendimento = {     // objeto para ser enviado
      dataAtendimento,
      barbeiro,
      servico
    }

    await axios.post('http://127.0.0.1:5000/atendimentos', novo_atendimento);

  }

  return (
    <DivContainer>
      <Titulo>Adicionar novo atendimentos</Titulo>

      <ContainerForm action="" onSubmit={cadastrarAtendimento}>
        <GroupForm>
          <Label htmlFor="data_atendimento">Data e hora atendimento</Label>
          <Input
            type="data"
            name="data_atendimento"
            id="data_atendimento"
            placeholder="Digite o horario"
            onChange={({ target }) => setDataAtendimento(target.value)}
          />
        </GroupForm>

        <GroupForm>
          <Label htmlFor="id_barbeiro">Barbeiro</Label>
          <Input
            type="text"
            name="id_barbeiro"
            id="id_barbeiro"
            placeholder="Digite o barbeiro!"
            onChange={({ target }) => setBarbeiro(target.value)}
          />
        </GroupForm>

        <GroupForm >
          <Label htmlFor="id_servico">Serviço:</Label>
          <Input
            type="text"
            name="id_servico"
            id="id_servico"
            placeholder="Digite o Serviço!"
            onChange={({ target }) => setServico(target.value)}
          />
        </GroupForm>

        <Button className="form-button">Enviar</Button>
      </ContainerForm>
    </DivContainer>
  )
}