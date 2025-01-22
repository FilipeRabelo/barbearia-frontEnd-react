import styled from "styled-components";
import { cores } from "../../utils/cores";
import { Link } from "react-router-dom";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.70rem;
  padding: 0 20px;
`

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding-right: 25px;
   margin-top: 16px;
`

export const BotaoAddServico = styled(Link)`
  border: 1pix solid ${cores.pretoAzulado};
  text-decoration: none;
  text-align: center;
  padding: 11px;
  background-color: ${cores.marromEscuro};
  color: ${cores.branco};
  border-radius: 10px;
  font-size: 1rem;
  font-family: "Josefin Sans", serif;
  font-weight: bold;
  cursor: pointer;

  transition: all 0.6s;

  &:hover{
    background-color: #FFF;
    color: #000;
    transform: scale(1.05);
  }
`