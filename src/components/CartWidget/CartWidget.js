import React from 'react'
import logo from '../../assets/carro.png'
import './CartWidget.css'


const CartWidget = () => {
  return (
    <div className='menu_navbar__logo'>
        <img className='menu-navbar__img' src={logo} alt="cart widget"/>

    </div>
  )
}

export default CartWidget