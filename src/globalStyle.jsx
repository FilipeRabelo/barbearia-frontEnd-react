import styled, { createGlobalStyle } from "styled-components";
import { cores } from "./utils/cores";
import { Link } from "react-router-dom";

// RESET GLOBAL
export const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    /* overflow-x: hidden; */
    /* height: 100%; */
    /* display: flex; */
    /* flex-direction: column; */
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  #root {
    display: flex; 
    flex-direction: column; 
    min-height: 100vh; /*Força o layout flexível*/
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    background-color: #ccc;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


  ::-webkit-scrollbar {
    width: 10px; /* Largura da barra vertical */
    height: 0; /* Altura da barra horizontal */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #101026; /* Cor da barra */
    border-radius: 2px; /* Para deixar as bordas arredondadas */
    width: 20px;  
  }

  ::-webkit-scrollbar-track {
    background-color: white; /* Cor de fundo da barra */
  }
`;

export const SubtituloCard = styled.h2`
  font-family: "Josefin Sans", serif;
  color: ${cores.marromEscuro};
  font-size: 1.9rem;
  padding:20px 20px 5px;
  font-weight: 600;
`;

export const SubtituloH3Card = styled.h3`
  color: ${cores.marromClaro};
`;

export const SpanCard = styled.span`
  color: ${cores.branco};
`;

export const Links = styled(Link)`
  color: ${cores.marromClaro};
  text-decoration: none;
  font-size: 0.8rem;
  font-family: "Josefin Sans", serif;
  font-weight: bold;
  align-items: center;
  margin-bottom: -19px;
  border: 1px solid ${cores.pretoAzulado};
  padding: 7px;
  border-radius: 10px;
  background-color: ${cores.pretoAzulado};
`

export const BotaoAdd = styled(Link)`
  border: 1pix solid ${cores.pretoAzulado};
  text-decoration: none;
  text-align: center;
  padding: 9px;
  background-color: ${cores.marromEscuro};
  color: ${cores.branco};
  border-radius: 7px;
  font-size: 0.7rem;
  font-family: "Josefin Sans", serif;
  font-weight: bold;
  cursor: pointer;

  transition: all 0.6s;

  &:hover{
    background-color: #ccc;
    color: #000;
    /* transform: scale(1.05); */
  }
`

/* overflow-x: hidden; */