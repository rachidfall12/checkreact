import React from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
      <section id='Home'>
     <div>
          <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <img className='img1' src="./src/assets/image/dal1.png" alt="logo" />
          <Navbar.Brand href="#Home">React Check</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Products">Products</Nav.Link>
            <Nav.Link href="#About us">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

     </div>

     </section>

    )
}

export default Header