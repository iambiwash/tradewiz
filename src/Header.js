/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Logo from './Logo.png'
import './Header.css'


function Header() {
  return (
    <div className='header_wrapper'>
        {/* Logo */}
        <div className='header_logo'>
            <img src={Logo} width={50} />
        </div>
        {/* Search */}
        <div className='header_search'>
           
            <div className='header-searchContainer'>
               <input placeholder='search' type='text'/> 
            </div>
        </div>
        {/* Menu Items */}
        <div className='header_menu'>
            <a href='#'>Free Stocks</a>
            <a href='#'>Portfolio</a>
            <a href='#'>Cash</a>
            <a href='#'>Messages</a>
            <a href='#'>Account</a>
        </div>
    </div>
  )
}

export default Header
