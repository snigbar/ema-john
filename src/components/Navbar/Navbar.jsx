import React from 'react'
import Logo from '../../assets/Logo.svg'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="navbar__logo">
            <img src={Logo}/>
        </div>

       
            <ul className="navbar_links">
                <li><a href="#">Order</a></li>
                <li><a href="#">Order Review</a></li>
                <li><a href="#">Manage Inventory</a></li>
                <li><a href="#">Login</a></li>
            </ul>
      
    </nav>
  )
}
