import React from 'react'
import Logo from '../../assets/Logo.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="navbar__logo">
            <img src={Logo}/>
        </div>

       
            <ul className="navbar_links">
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/Orders">Orders</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/login_page">Login</Link></li>
            </ul>
   
    </nav>
  )
}
