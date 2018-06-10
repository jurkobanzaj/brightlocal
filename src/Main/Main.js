import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ClientInformation from './ClientInformation/ClientInformation';
import Locations from './Locations/Loactions';
import locationsData from '../Main/Locations/locations-data';
import './Main.css'

const Main = () => (
    <div className="content-container">
        <div className="main-nav">
            <span className="main-tab-nav-selected">Clients&Locations</span> / Edit Client
        </div>
        <h1 className="main-heading">The Search Dawgs</h1>
        <div className="main-tab-container">
            <Tabs>
                <TabList>
                    <Tab className="tab">Client Information</Tab>
                    <Tab className="tab">Locations({locationsData.length})</Tab>
                </TabList>

                <TabPanel>
                    <ClientInformation />
                </TabPanel>
                <TabPanel>
                    <Locations />
                </TabPanel>
            </Tabs> 
        </div>
    </div>
);

export default Main;