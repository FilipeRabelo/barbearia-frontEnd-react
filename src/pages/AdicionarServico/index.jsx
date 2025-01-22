import { useState } from 'react';
import { Button, ContainerForm, GroupForm, Input, Label, Titulo } from './style';
import axios from 'axios';

export default function AdicionarServico() {

  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [valor, setValor] = useState();
  const [porcentagem, setPorcentagem] = useState();

  async function cadastrarServico(event){
    event.preventDefault();

    const novo_servico = {    // objeto para ser enviado
      nome: nome,
      descricao: descricao,
      valor: valor,
      porcentagem_barbeiro: porcentagem
    };

    await axios.post('http://127.0.0.1:5000/servicos', novo_servico);
  }

  return (
    <>
      <Titulo>Adicionar novo servico</Titulo>

      <ContainerForm action="" onSubmit={cadastrarServico}>

        <GroupForm>
          <Label htmlFor="nome">Nome:</Label>
          <Input
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite o nome"
            onChange={({ target }) => setNome(target.value)}
          />
        </GroupForm>

        <GroupForm>
          <Label htmlFor="descricao">Descrição:</Label>
          <Input
            type="text"
            name="descricao"
            id="descricao"
            placeholder="Digite a descrição do serviço"
            onChange={({target}) => setDescricao(target.value)}
          />
        </GroupForm>

        <GroupForm >
          <Label htmlFor="valor">Valor:</Label>
          <Input
            type="text"
            name="valor"
            id="valor"
            placeholder="Digite o valor do serviço"
            onChange={({target}) => setValor(target.value)}
          />
        </GroupForm>

        <GroupForm >
          <Label htmlFor="porcentagem_barbeiro">Porcentagem:</Label>
          <Input
            type="text"
            name="porcentagem_barbeiro"
            id="porcentagem_barbeiro"
            placeholder="Digite o Porcentagem do serviço"
            onChange={({target}) => setPorcentagem(target.value)}
          />
        </GroupForm>

        <Button className="form-button">Enviar</Button>
      </ContainerForm>
    </>
  )
}