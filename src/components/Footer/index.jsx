import React from "react"
import './styles.css'
import { FooterStyle }  from './style';

export function Footer(){

  // const today = new Date();
  // const formattedDate = today.toLocaleDateString("pt-BR");

  const currentYear = new Date().getFullYear();

  return(
    <FooterStyle >
      <h3>Footer Barbearia</h3>
      <p>Todos os direitos reservados © | {currentYear}</p>
    </FooterStyle>
  )
}