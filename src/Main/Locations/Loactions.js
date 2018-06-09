import React from 'react';
import locationsData from './locations-data';

const Locations = () => (
    <div>
        <h3>Locations({locationsData.length})</h3>
        <h2>Assigned Locations</h2>
        <p>The locations in the table below are currently assigned to this Client. You can un-assign them using the checkbox in the 'Assigned' column.</p>
        <p>Unassign arrow Location arrow Reference City Postal Code Existing Client</p>
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
                    <div id={id}>
                        <input type="checkbox" />
                        {location}
                        {reference}
                        {city}
                        {postalCode}
                        {existingClient}
                    </div>
                )
            })
        }
    </div>
);

export default Locations;