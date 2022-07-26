import React from 'react';
import BusinessItem from './BusinessItem';

//{data}
const BusinessList = ({data}) => {
    return (
        <ul className="list">
            {
                data.map(item=> <BusinessItem key={item.id} item ={item}/> )
            }
        </ul>
    );
};

export default BusinessList;