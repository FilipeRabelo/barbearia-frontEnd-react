import styled from "styled-components";
import { cores } from "../../utils/cores";

export const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* background-color: ${cores.verdeElegante}; */
  background-color: ${cores.pretoAzulado};
  padding: 15px;
  color: ${cores.branco};
  border-radius: 10px;
`;