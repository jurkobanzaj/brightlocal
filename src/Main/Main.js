import React from 'react';
import ClientInformation from './ClientInformation/ClientInformation';
import Locations from './Locations/Loactions';
import './Main.css'

const Main = () => (
    <div className="content-container">
        <div className="main-tab-nav">
            <span className="main-tab-nav-selected">Clients&Locations</span> / Edit Client
        </div>
        <h1 className="main-heading">The Search Dawgs</h1>
        <div className="main-tab-container">
            <ClientInformation />
            <Locations />
            <button>Update Client</button>
            <button>Cancel</button>
            <button>Delete Client</button>
        </div>
    </div>
);

export default Main;