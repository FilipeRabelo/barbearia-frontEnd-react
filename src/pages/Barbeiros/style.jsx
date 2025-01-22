import styled from "styled-components";
import { cores } from "../../utils/cores";
import { Link } from "react-router-dom";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.70rem;
  padding: 0 20px;
  margin-bottom: 1rem;
`

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding-right: 25px;
  margin-top: 16px;
`

export const SectionLink = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.70rem;
  padding: 0 20px;
  margin-bottom: 1rem;
`

export const BotaoAddBarbeiro = styled(Link)`
  color: ${cores.branco};
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.6s;

  &:hover{
    background-color: #FFF;
    color: #000;
    transform: scale(1.05);
  }
`