import styled from "styled-components";
import { cores } from "../../utils/cores";

export const FooterStyle = styled.footer`
  background-color: ${cores.pretoAzulado};
  color: ${cores.branco};
  width: 100%;
  margin: 2rem auto 0;
  padding: 1.2rem; 
  font-size: 1rem;
  font-family: "Josefin Sans", serif;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 10px;
`;