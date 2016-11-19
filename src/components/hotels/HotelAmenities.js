import React from 'react';

const HotelAmenities = ({hotel}) => {
    return (
        <ul className="hotel-amenities list-inline">
            <li className="list-group-item">
                <span>Amazing SPA</span>
            </li>
            <li className="list-group-item">
                <span>Good food</span>
            </li>
            <li className="list-group-item">
                <span>Family friendly</span>
            </li>
            <li className="list-group-item">
                <span>Great location</span>
            </li>
            <li className="list-group-item">
                <span>Perfect WIFI</span>
            </li>
            <li className="list-group-item">
                <span>Central location</span>
            </li>
            <li className="list-group-item">
                <span>Very clean</span>
            </li>
        </ul>
    );
};

HotelAmenities.propTypes = {
    hotel: React.PropTypes.object.isRequired
};

export default HotelAmenities;