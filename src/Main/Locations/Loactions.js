import React from 'react';
import locationsData from './locations-data';
import './Locations.css';

const Locations = () => (
    <div>
        <div className="locations-container">
            <h2 className="locations-heading">Assigned Locations</h2>
            <p className="locations-text">The locations in the table below are currently assigned to this Client. You can un-assign them using the checkbox in the 'Assigned' column.</p>
            <table>
                <tr className="locations-table-legend">
                    <th>Unassign</th>
                    <th><i className="fas fa-sort fa-xs"></i> Location</th>
                    <th><i className="fas fa-sort fa-xs"></i> Reference</th>
                    <th>City</th>
                    <th>Postal Code</th>
                    <th>Existing Client</th>
                </tr>
            {
                locationsData.map(({
                    id,
                    location,
                    reference,
                    city,
                    postalCode,
                    existingClient
                }) => {
                    return(
                        <tr key={id}>
                            <td className="locations-checkbox"><input type="checkbox" /></td>
                            <td>{location}</td>
                            <td>{reference}</td>
                            <td>{city}</td>
                            <td>{postalCode}</td>
                            <td>{existingClient}</td>
                        </tr>
                    )
                })
            }
            </table>
        </div>
        <div className="button-container">
            <hr />
            <div className="button-gtoups">
                <div>
                    <button className="btn-green">Update Client</button>
                    <button className="btn-brick">Cancel</button>
                </div>
                <div>
                    <button className="btn-red">Delete Client</button>
                </div>
            </div>
        </div>
    </div>
);

export default Locations;