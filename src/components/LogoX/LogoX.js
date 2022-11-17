import React from 'react'
import logoX from '../../imagenes/logoX.png'
import './LogoX.css'
import {Link} from 'react-router-dom';


const LogoX = () => {
   return (
     <div className='menu_navbar__logo'>
         <img className='menu-navbar__img' src={logoX} alt="cart widget"/>
     </div>
       )
    }
    
    export default LogoX