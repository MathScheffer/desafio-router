import React from 'react'

import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <nav className="navigation Header">
      <NavLink to="/" end className="navButton">
        Produto
      </NavLink>
      <NavLink to="contato" className="navButton">
        Contato
      </NavLink>
    </nav>
  )
}

export default Header
