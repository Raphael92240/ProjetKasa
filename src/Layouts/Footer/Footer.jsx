import React from 'react';
import LogoFooter from '@/Assets/Images/LogoFooter.png';

const Footer = () => {
    return (
        <footer>
            <img src={LogoFooter} alt="Logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;