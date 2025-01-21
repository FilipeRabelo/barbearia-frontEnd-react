import styled from "styled-components";
import { Link } from "react-router-dom";


export const Logo = styled.img`
  max-width: 80px;
`;

export const HeaderStyle = styled.header`
  background-color: #2f4f4f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding-right: 10px;
`;

// TAG LINK
export const LinkStyled = styled(Link)`
  color: #d2b48c;
  text-decoration: none;
  font-size: 1.1rem;
  font-family: "Josefin Sans", serif;
`