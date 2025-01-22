import styled from "styled-components";
import { Link } from "react-router-dom";
import { cores } from "../../utils/cores";


export const Logo = styled.img`
  max-width: 80px;
  padding: 0.5rem 0;
`;

export const HeaderStyle = styled.header`
  /* background-color: ${cores.verdeElegante} */
  background-color: ${cores.pretoAzulado};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding-right: 20px;
`;

// TAG LINK
export const LinkStyled = styled(Link)`
  color: ${cores.marromClaro};
  text-decoration: none;
  font-size: 1.1rem;
  font-family: "Josefin Sans", serif;
`