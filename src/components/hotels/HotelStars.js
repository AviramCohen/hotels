import React from 'react';
import FontAwesome from 'react-fontawesome';

const HotelStars = ({stars}) => {
    const starsItems = [];

    for (let i = 1; i <= 5; i++) {
        const className = i <= stars ? 'hotel-star-icon highlight' : 'hotel-star-icon';
        starsItems.push(
            <li className="hotel-star" key={"star" + i}>
                <FontAwesome name="star-o" className={className} />
            </li>
        );
    }

    return (
        <ul className="hotel-stars list-inline">
            {starsItems}
        </ul>
    );
};

HotelStars.propTypes = {
    stars: React.PropTypes.number.isRequired
};

export default HotelStars;