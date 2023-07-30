import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../Images/logo.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Header({theme, setComp}) {


  let color = ''

  useEffect(() => {
    if (theme==='white'){
      color = 'black'
      console.log('black')
    }
  }, [theme])

  return (
    theme==='white'?
    <Navbar expand="lg" onSelect={(selectedKey) => setComp(selectedKey)} className="d-flex" style={{ width: '100%', position: 'relative'}}>
        <Navbar.Brand href="/home" className='m-0 p-0' as={Link}>
            <img alt='Signature Logo' src={logo} style={{width: '100px', margin: 0, padding:0}}/>
        </Navbar.Brand>
            <Navbar.Toggle className='' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-end nav-light" style={{width: '100%', fontWeight: 'bold'}}>
                <Nav.Link as={Link} href="/home"  eventKey="home" style={{color: 'black'}}>Home</Nav.Link>
                <Nav.Link as={Link} href="/about" eventKey="about" style={{color: 'black'}}>About</Nav.Link>
                <Nav.Link as={Link} href="#link" eventKey="portfolio" style={{color: 'black'}}>Portfolio</Nav.Link>
                <Nav.Link as={Link} href="#link" eventKey="contact" style={{color: 'black'}}>Contact Me</Nav.Link>
            </Nav>
            </Navbar.Collapse>
    </Navbar>
    :
    <Navbar expand="lg" className="d-flex nav-dark" style={{width: '100%', position: 'relative'}}>
      <Navbar.Brand href="home" className='m-0 p-0' as={Link}>
          <img alt='Signature Logo' src={logo} style={{width: '100px', margin: 0, padding:0}}/>
      </Navbar.Brand>
          <Navbar.Toggle className='' style={{backgroundColor:  '#24ff00', border: '3px  white  solid'}} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-end" style={{width: '100%', fontWeight: 'bold'}}>
              <Nav.Link href="/home" style={{color: 'white'}}>Home</Nav.Link>
              <Nav.Link href="about" style={{color: 'white'}}>About</Nav.Link>
              <Nav.Link href="#link" style={{color: 'white'}}>Portfolio</Nav.Link>
              <Nav.Link href="#link" eventKey='Contact' style={{color: 'white'}}>Contact Me</Nav.Link>
          </Nav>
          </Navbar.Collapse>
  </Navbar>
  )
}

export default Header;