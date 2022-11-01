import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// const NavBar = () => {
//   return (
//     <div className = 'menu-navbar-container'>
//         <h1 className = 'menu-title'>Xgame-shop</h1>
//             <ul className='menu-items'>
//                 <li>
//                     <a hre='' className='menu-list'>Productos</a>
//                 </li>
//                 <li>
//                     <a hre='' className='menu-list'>Buscar</a>            
//                 </li>
//                 <li>
//                     <a hre='' className='menu-list'>Mis pedidos</a>            
//                 </li>
//             </ul>

//         <CartWidget/>

//     </div>
//   )
// }

// export default NavBar

const NavBar = () => {
    return (
    <>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Xgame-shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#buscar">Buscar</Nav.Link>
            <Nav.Link href="#mispedidos">Mis pedidos</Nav.Link>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>
    </>
    )
  }
  
  export default NavBar