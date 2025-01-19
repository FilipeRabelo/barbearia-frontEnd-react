import React from "react"
import './styles.css'

export function Footer(){

  // const today = new Date();
  // const formattedDate = today.toLocaleDateString("pt-BR");

  const currentYear = new Date().getFullYear();

  return(
    <footer className="footer">
      <h3>Footer Barbearia</h3>
      <p>Todos os direitos reservados © | {currentYear}</p>
    </footer>
  )
}