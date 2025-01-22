import styled from "styled-components";

export const DivContainer = styled.div`
  height: 100vh;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.70rem;
  padding: 0 20px;

   /* Media query para celular */
  @media(max-width: 768px) {
    /* display: grid; */
    grid-template-columns: 1fr; /* 1 coluna no celular */
  }
`

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding-right: 25px;
  margin-top: 16px;
`