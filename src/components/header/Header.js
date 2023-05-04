import logo from '../midia/logo.png'
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
        return (
                <Navbar bg="light" expand="lg" className='NAV'>
                        <Container>
                                <img className="logo" src={logo} alt='logo' />
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                                <Nav.Link href="/">Home</Nav.Link>
                                                <Nav.Link href="/quemsomos">Quem somos</Nav.Link>
                                                <Nav.Link href="/parceiros">Advogados parceiros</Nav.Link>
                                                <a className='dropdown nav-link dropbtn'>
                                                        <span>Area do cliente</span>
                                                        <div className='dropdown-content'>
                                                                <Nav.Link href="/login">Login</Nav.Link>
                                                                <Nav.Link href="/cadastro">Cadastrar</Nav.Link>
                                                        </div>
                                                </a>
                                        </Nav>
                                </Navbar.Collapse>
                        </Container>
                </Navbar >
        )
}

