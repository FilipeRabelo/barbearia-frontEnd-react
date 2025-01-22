import styled from "styled-components";
import { Link } from "react-router-dom";
import { cores } from "../../utils/cores";

export const HeaderStyle = styled.header`
  /* background-color: ${cores.pretoAzulado}; */
  background-color: ${cores.verdeElegante};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  /* max-height: 90px; */

  /* 
  @media(max-width: 768px) {
    padding: 1.2rem;
  }  */
`

export const Logo = styled.img`
  /* padding: 0.5rem 0; */
  max-width: 90px;
  margin-left: 1rem;

  @media(max-width: 768px) {
    max-width: 100px;      
    /* display: none */
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding-right: 20px;

   @media(max-width: 768px) {
    display: grid;
    gap: 5px;
    margin: 0 16px  
  }
`;

// TAG LINK
export const LinkStyled = styled(Link)`
  color: ${cores.marromClaro};
  text-decoration: none;
  font-size: 1.1rem;
  font-family: "Josefin Sans", serif;
  transition: all 0.3s;

  &:hover{
    color: ${cores.branco};
  }
`