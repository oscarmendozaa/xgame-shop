import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Outlet} from 'react-router-dom';
import LogoX from '../LogoX/LogoX'


const NavBar = () => {
    return (
    <>
    <Navbar bg="light" variant="light" className='navBg' expand="lg">
        <Container>
          <LogoX/>
          <Navbar.Brand as={Link} to="/">Xgame-shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/categoria/consolas/">Consolas</Nav.Link>
            <Nav.Link as={Link} to="/categoria/juegos">Juegos</Nav.Link>
            <Nav.Link as={Link} to="/categoria/MisPedidos">Mis pedidos</Nav.Link>
          </Nav>
        </Container>
          <CartWidget/>
      </Navbar>

      <section>
          <Outlet></Outlet>
      </section>


    </>
    )
  }
  
  export default NavBar





//Nav bar fuera de bootstarp
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