import styled from "styled-components";
import { cores } from "../../utils/cores";

export const DivContainer = styled.div`
  height: 100vh;
`;

export const Titulo = styled.h2`
  font-family: "Josefin Sans", serif;
  color: ${cores.marromEscuro};
  font-size: 1.6rem;
  /* padding: 10px 0; */
  font-weight: 600;
  text-align: center;
`

export const ContainerForm = styled.form`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  font-family: Arial, sans - serif;
`
export const GroupForm = styled.form`
  margin-bottom: 15px;
`

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 94%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 14px;
  
  &:focus{
    border-color: #8A2BE2;
    outline: none;
    box-shadow: 0 0 5px rgba(138, 43, 190, 0.5);
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${cores.marromEscuro};
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${cores.pretoAzulado};
  }

  &:active {
    background-color: #5a189a;
  }
`