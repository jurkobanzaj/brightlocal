import React from 'react';
import TopMenu from './TopMenu/TopMenu';
import './Header.css';

const Header = () => (
    <div>
        <div className="header-top">
            <a href="/" className="header-logo">
                <img src="./images/brightlocal-logo.svg" alt="BrightLocal"/>
            </a>
            <p className="header-featured"> <i className="fas fa-graduation-cap"></i> Free Training Workshops</p>
        </div>
        <TopMenu />
    </div>
);

export default Header;