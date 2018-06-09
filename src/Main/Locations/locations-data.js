const locationsData = [
    {
        id: 1,
        location: 'Location 1',
        reference: 789456,
        city: 'Bogner',
        postalCode: '13465',
        existingClient: 'The Search Dawgs'
    },
    {
        id: 2,
        location: 'Place 2',
        reference: 732654,
        city: 'Brussels',
        postalCode: '79456',
        existingClient: 'The Search Dawgs'
    },
    {
        id: 3,
        location: 'Adobe 3',
        reference: 794613,
        city: 'Bruges',
        postalCode: '46851',
        existingClient: 'The Search Dawgs'
    },
    {
        id: 4,
        location: 'Base 4',
        reference: 172839,
        city: 'Berlin',
        postalCode: 'BT4 9OP',
        existingClient: 'The Search Dawgs'
    }
];

export const getLocationsMap = (array) => {    
    return array.reduce((map, location) => ({
        ...map,
        [location.id]: location,
    }), {});
};

export default locationsData;