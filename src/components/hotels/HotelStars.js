import React from 'react';
import FontAwesome from 'react-fontawesome';

const HotelStars = () => {
    return (
        <ul className="hotel-stars list-inline">
            <li className="hotel-star">
                <FontAwesome name="star-o" className="hotel-star-icon highlight" />
            </li>
            <li className="hotel-star">
                <FontAwesome name="star-o" className="hotel-star-icon highlight" />
            </li>
            <li className="hotel-star">
                <FontAwesome name="star-o" className="hotel-star-icon highlight" />
            </li>
            <li className="hotel-star">
                <FontAwesome name="star-o" className="hotel-star-icon highlight" />
            </li>
            <li className="hotel-star">
                <FontAwesome name="star-o" className="hotel-star-icon" />
            </li>
        </ul>
    );
};

HotelStars.propTypes = {
    //myProp: PropTypes.type.isRequired
};

export default HotelStars;