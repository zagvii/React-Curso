import React from 'react'
import "./Navbar.css"

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return <nav>
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link> */}

            {/* Automático .active - Versões atuais */}
            {/* <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink> */}

            {/* Automático .active - Versões antigas */}
            <NavLink to='/' className={({isActive}) => (isActive ? "ativo" : "nao-ativo")}>Home</NavLink>
            <NavLink to='/about' className={({isActive}) => (isActive ? "ativo" : "nao-ativo")}>About</NavLink>
    </nav>;
};

export default Navbar