import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logoB.png'

function Header() {
  return (
    <Navbar expand="md" className="d-flex justify-content-evenly" style={{margin: 'auto', width: '100%'}}>
      <Container style={{}} className=''>
        <Navbar.Brand href="home" >
            <img alt='Signature Logo' src={logo} style={{width: '130px'}}/>
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-end" style={{width: '100%'}}>
                <Nav.Link style={{color: 'white'}} href="/home">Home</Nav.Link>
                <Nav.Link href="about" style={{color: 'white'}}>About</Nav.Link>
                <Nav.Link href="#link" style={{color: 'white'}}>Portfolio</Nav.Link>
                <Nav.Link href="#link" style={{color: 'white'}}>Contact Me</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header;