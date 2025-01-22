import styled from "styled-components";
import { cores } from "../../utils/cores";

export const FooterStyle = styled.footer`
  background-color: ${cores.verdeElegante};
  color: ${cores.branco};
  padding: 1.2rem; 
  font-size: 1.1rem;
  font-family: "Josefin Sans", serif;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%; /*Garante que ele ocupe toda a largura*/
  position: relative; /*Para evitar sobreposição*/
  bottom: 0;
  /* margin: 0 auto */
`;

export const DivFooter = styled.div`
  align-items: center;
  text-align: center;
`