import { Link } from 'react-router-dom';
import { Logo, HeaderStyle, Ul, LinkStyled } from './style';


export function Header() {
  return (
    <HeaderStyle>
      <Link to={'/'}>
        <Logo
          src="/public/logo3.png"
          alt="logo barbearia"
        />
      </Link>

      <nav>
        <Ul>
          <li><LinkStyled to={'/'}>Home</LinkStyled></li>
          <li><LinkStyled to={'/barbeiros'}>Barbeiros</LinkStyled></li>
          <li><LinkStyled to={'/servicos'}>Servicos</LinkStyled></li>
          <li><LinkStyled to={'/atendimentos'}>Atendimentos</LinkStyled></li>
        </Ul>
      </nav>
    </HeaderStyle>
  )
}