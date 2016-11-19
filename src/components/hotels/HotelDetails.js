import React from 'react';
import FontAwesome from 'react-fontawesome';
import HotelStars from './HotelStars';
import HotelAmenities from './HotelAmenities';

const HotelDetails = ({hotel}) => {
    return (
        <div className="hotel-details-container">
            <h2 className="hotel-name">{hotel.name}</h2>
            <HotelStars />
            <div className="hotel-distance">
                <FontAwesome name="location-arrow" className="hotel-distance-icon" />
                <span className="hotel-distance-text">120m to city centre</span>
            </div>
            <div className="hotel-rating">
                <FontAwesome name="smile-o" className="hotel-rating-icon" />
                <span className="hotel-rating-text">{"Very Good " + hotel.guestVote}</span>
            </div>
            <HotelAmenities
                hotel={hotel} />
        </div>
    );
};

HotelDetails.propTypes = {
    hotel: React.PropTypes.object.isRequired
};

export default HotelDetails;