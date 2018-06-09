import React from 'react';
import './ClientInformation.css'

const EditClient = () => (
    <div>
        <h3 className="client-information-tab">Client Information</h3>
        <div className="client-information-container">
            <p className="client-information-required">* Required</p>
            <div className="client-information-form">
                <form>
                    <div>
                        <label>Company Name: *</label>
                        <br />
                        <input className="client-information-input" type="text" placeholder="Bob Loblaw" name="company" required />
                        <br />
                        <label>Business Category: *</label>
                        <br />
                        <select className="client-information-select" name="category">
                            <option value="law">Law</option>
                            <option value="criminal">Criminal</option>
                        </select>
                        <br />
                        <label>State / Country / Region: *</label>
                        <br />
                        <select className="client-information-select" name="location">
                            <option value="glamorgan">Glamorgan</option>
                            <option value="monmouth">Monmouth</option>
                        </select>
                    </div>
                    <div>
                        <label>Company URL: *</label>
                        <br />
                        <input className="client-information-input" type="url" placeholder="http://bobloblawslawblog.com" required />
                        <br />
                        <label>Unique Client Reference: *</label>
                        <br />
                        <select className="client-information-select" name="reference">
                            <option value="46974613">46974613</option>
                            <option value="46974611">46974611</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default EditClient;