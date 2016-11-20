import React, { PropTypes } from 'react';
import HotelDetails from './HotelDetails';
import HotelOffer from './HotelOffer';

class Hotel extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="hotel-view row">
                <div className="hotel-photo-container">
                    <img src={this.props.hotel.images[0].large} />
                </div>
                <HotelDetails
                    hotel={this.props.hotel} />
                <HotelOffer
                    offers={this.props.hotel.offers} />
            </div>
        );
    }
}

Hotel.propTypes = {
    hotel: PropTypes.object.isRequired
};

export default Hotel;