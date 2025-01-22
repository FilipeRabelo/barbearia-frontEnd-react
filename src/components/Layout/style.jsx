import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que o layout ocupe toda a altura da janela */
  /* width: 100%; */

  
`

export const LayoutMain = styled.main`
  flex: 1; /* Faz com que o conteúdo ocupe o espaço disponível */
  padding: 20px;
  margin: 1rem 0;
  overflow: auto; /*Permite rolagem se o conteúdo for muito grande*/
  width: auto;
`