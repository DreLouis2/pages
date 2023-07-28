import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../Images/logo.png'
import { useState, useEffect } from 'react';


function Header({theme}) {


  let color = ''

  useEffect(() => {
    if (theme==='white'){
      color = 'black'
      console.log('black')
    }
  }, [theme])



  return (
    theme==='white'?
    <Navbar expand="lg" className="d-flex justify-content-evenly " style={{margin: 'auto', width: '100%', position: 'relative'}}>
      <Container style={{}} className=''>
        <Navbar.Brand href="home" >
            <img alt='Signature Logo' src={logo} style={{width: '130px'}}/>
        </Navbar.Brand>
            <Navbar.Toggle className='' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-end" style={{width: '100%', fontWeight: 'bold'}}>
                <Nav.Link href="/home" style={{color: 'black'}}>Home</Nav.Link>
                <Nav.Link href="about" style={{color: 'black'}}>About</Nav.Link>
                <Nav.Link href="#link" style={{color: 'black'}}>Portfolio</Nav.Link>
                <Nav.Link href="#link" style={{color: 'black'}}>Contact Me</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    :
    <Navbar expand="lg" className="d-flex justify-content-evenly nav-dark" style={{margin: 'auto', width: '100%', position: 'relative'}}>
    <Container style={{}} className=''>
      <Navbar.Brand href="home" >
          <img alt='Signature Logo' src={logo} style={{width: '130px'}}/>
      </Navbar.Brand>
          <Navbar.Toggle className='' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-end" style={{width: '100%', fontWeight: 'bold'}}>
              <Nav.Link href="/home" style={{color: 'white'}}>Home</Nav.Link>
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