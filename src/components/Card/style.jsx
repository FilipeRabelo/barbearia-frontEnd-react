import styled from "styled-components";
import { cores } from "../../utils/cores";

export const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  /* background-color: ${cores.verdeElegante}; */
  background-color: ${cores.pretoAzulado};
  padding: 15px;
  color: ${cores.branco};
  border-radius: 7px;
`;
  
  /* Media query para celular */
// @media(max-width: 768px) {
//   display: grid;
//   grid-template-columns: 1fr; /* 1 coluna no celular */
// } 