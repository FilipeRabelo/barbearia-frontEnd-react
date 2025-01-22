import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.70rem;
  padding: 0 20px;

  /* Media query para celular */
  @media(max-width: 768px) {
    /* display: grid; */
    grid-template-columns: 1fr; /* 1 coluna no celular */
  }
`
export const DivContent = styled.div`
  margin-bottom: 2rem;  
`

export const DivContainer = styled.div`
  
`

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding-right: 25px;
`