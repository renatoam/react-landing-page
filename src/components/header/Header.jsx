import React from 'react';
import './../../scss/main.css';
import logo from '../../images/logo.svg';

const Logo = () => {
    return (
        <figure className="logo">
            <img src={logo} alt="" />
        </figure>
    )
}

const Menu = () => {
    return (
        <nav id="menuHeader"> 
            <ul className="menu">
                <li className="menu__item">Features</li>
                <li className="menu__item">Team</li>
                <li className="menu__item">Signin</li>
            </ul>
        </nav>
    )
}

const Header = () => {
    return (
       <header className="header">
           <Logo />
           <Menu />
       </header>
    )
}

export default Header;