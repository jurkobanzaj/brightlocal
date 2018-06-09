import React from 'react';
import './TopMenu.css';

const TopMenu = () => (
    <div>
        <div className="top-menu">
            <div className="top-menu-left">
                <div className="top-menu-ico">
                    <i className="fas fa-tachometer-alt"></i>
                </div>
                <div className="top-menu-item">Rank Checker</div>
                <div className="top-menu-item">SEO Check-Up</div>
                <div className="top-menu-item">CitationTracker</div>
                <div className="top-menu-item">Google+ LocalWizard</div>
                <div className="top-menu-item">CitationBurst</div>
                <div className="top-menu-item">ReviewBiz</div>
                <div className="top-menu-item">ReviewFlow</div>
            </div>
            <div className="top-menu-right">
                <div className="top-menu-userpic">
                    <img src="./images/userpic.png" alt="userpic" />
                    <i className="fas fa-caret-down"></i>
                </div>
            </div>
        </div>
    </div>
);

export default TopMenu;