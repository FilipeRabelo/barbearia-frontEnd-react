import { Link } from 'react-router-dom'
import './styles.css'

export function Header() {
  return (
    <header className='header'>
      <Link to={'/'}>
        <img className="logo" src="/logo.png" alt="" />
      </Link>

      <nav className='nav'>
        <ul className='ul-links'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/barbeiros'}>Barbeiros</Link></li>
          <li><Link to={'/servicos'}>Servicos</Link></li>
          <li><Link to={'/atendimentos'}>Atendimentos</Link></li>
        </ul>
      </nav>
    </header>
  )
}