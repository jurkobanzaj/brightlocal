import React from 'react';
import TopMenu from './TopMenu/TopMenu';

const Header = () => (
    <div>
        <a href="/">
            <img src="./images/brightlocal-logo.svg" alt="BrightLocal"/>
        </a>
        <p>Free Training Workshops</p>
        <TopMenu />
    </div>
);

export default Header;