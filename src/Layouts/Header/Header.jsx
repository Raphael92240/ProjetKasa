import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '@/Assets/Images/Logo.png';

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Logo" />
            <nav>
                <NavLink to="/home" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}>Accueil</NavLink>
                <NavLink to="/about" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}>À propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;